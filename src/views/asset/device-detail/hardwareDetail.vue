<template>
  <div>
    <el-row :gutter="20" style="margin-top:18px;">
      <el-col :span="4">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="body-text body-bolder">模块列表</span>
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
            <span class="body-text body-bolder">模块详情</span>
          </div>
          <el-table
            ref="multipleTable"
            :key="tableKey"
            v-loading="listLoading"
            :data="list"
            fit
            :show-header="false"
            highlight-current-row
            style="width: 100%;"
          >
            <el-table-column label="属性" min-width="60px" align="left">
              <template slot-scope="scope">
                <span>{{ scope.row.author }}</span>
              </template>
            </el-table-column>
            <el-table-column label="值" min-width="150px" align="left">
              <template slot-scope="scope">
                <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
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

export default {
  name: 'HardwareDetail',
  data() {
    const validate = (rule, value, callback) => {
      if (value.length !== 6) {
        callback(new Error('请输入六个字符'))
      } else {
        callback()
      }
    }
    return {
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
        label: '硬件模块',
        children: [{
          id: 2,
          label: '系统'
        }, {
          id: 3,
          label: '主板'
        }, {
          id: 4,
          label: '处理器'
        }, {
          id: 5,
          label: '内存'
        }, {
          id: 6,
          label: '插槽'
        }, {
          id: 7,
          label: '接口'
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
</style>
