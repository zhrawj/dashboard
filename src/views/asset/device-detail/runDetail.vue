<template>
  <div>
    <el-row :gutter="20" style="margin-top:18px;">
      <el-col :span="4">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="body-text body-bolder">当前状态</span>
          </div>
          <el-tree
            ref="tree2"
            :data="data2"
            :props="defaultProps"
            class="filter-tree"
            default-expand-all
          />
        </el-card>
      </el-col>

      <el-col :span="20">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span class="body-text body-bolder">历史趋势</span>
          </div>

          <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
            <line-chart :chart-data="lineChartData" />
          </el-row>

          <el-table
            ref="multipleTable"
            :key="tableKey"
            v-loading="listLoading"
            :data="list"
            fit
            :show-header="true"
            :header-cell-style="{background:'#f5f7fa'}"
            highlight-current-row
            style="width: 100%;"
          >
            <el-table-column label="时间" min-width="60px" align="left">
              <template slot-scope="scope">
                <span>{{ scope.row.author }}</span>
              </template>
            </el-table-column>
            <el-table-column label="名称" min-width="150px" align="left">
              <template slot-scope="scope">
                <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
              </template>
            </el-table-column>
            <el-table-column label="描述" min-width="230px">
              <template slot-scope="{row}">
                <span class="link-type" @click="handleUpdate(row)">{{ row.title }}</span>
                <el-tag>{{ row.type | typeFilter }}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import LineChart from './components/LineChart'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DeviceRunDetail',
  components: { LineChart },
  data() {
    const validate = (rule, value, callback) => {
      if (value.length !== 6) {
        callback(new Error('请输入六个字符'))
      } else {
        callback()
      }
    }
    return {
      lineChartData: lineChartData.newVisitis,
      demo: {
        title: ''
      },
      demoRules: {
        title: [{ required: true, trigger: 'change', validator: validate }]
      },
      tableKey: 0,
      listLoading: true,
      list: null,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      data2: [{
        id: 1,
        label: '处理器',
        children: [{
          id: 11,
          label: 'load: 5.0'
        }, {
          id: 12,
          label: 'usage: 5%'
        }, {
          id: 13,
          label: 'user: 1%'
        }, {
          id: 14,
          label: 'system: 2%'
        }]
      }, {
        id: 2,
        label: '内存',
        children: [{
          id: 21,
          label: '使用率'
        }, {
          id: 22,
          label: '内存'
        }, {
          id: 23,
          label: '磁盘'
        }, {
          id: 24,
          label: '网络'
        }]
      }, {
        id: 3,
        label: '磁盘',
        children: [{
          id: 31,
          label: '使用率'
        }, {
          id: 32,
          label: '内存'
        }, {
          id: 33,
          label: '磁盘'
        }, {
          id: 34,
          label: '网络'
        }]
      }, {
        id: 4,
        label: '网络',
        children: [{
          id: 41,
          label: '使用率'
        }, {
          id: 42,
          label: '内存'
        }, {
          id: 43,
          label: '磁盘'
        }, {
          id: 44,
          label: '网络'
        }]
      }]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 1000)
      })
    }
  }
}
</script>

<style scoped>
.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
.component-item{
  min-height: 100px;
}

.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
