<template>
  <div class="app-container">
    <!-- 第一行 -->
    <el-row>
      <el-card class="box-card">
        <div class="filter-container body-text">
          <el-row type="flex" class="search-row" justify="space-between">
            <el-col :span="6">
              <span>名称:</span> <span class="body-bolder">业务服务器01</span>
            </el-col>
            <el-col :span="6">
              <span>主机地址:</span> <span class="body-bolder">192.168.10.10</span>
            </el-col>
            <el-col :span="6">
              <span>主机ID:</span> <span class="body-bolder" style="margin-left: 23px">1e9d87d5-c021-4a60-bdb3-e105a545e1ae</span>
            </el-col>
            <el-col :span="6" />
          </el-row>
          <el-row type="flex" class="search-row" justify="space-between">
            <el-col :span="6">
              <span>状态:</span> <span class="body-bolder">online</span>
            </el-col>
            <el-col :span="6">
              <span>发行版本:</span> <span class="body-bolder">CentOS 7.4</span>
            </el-col>
            <el-col :span="6">
              <span>持续时间:</span> <span class="body-bolder">38天15小时35分钟</span>
            </el-col>
            <el-col :span="6" />
          </el-row>
          <el-row type="flex" class="search-row" justify="space-between">
            <el-col :span="6">
              <span>项目:</span> <span class="body-bolder">xxxx业务</span>
            </el-col>
            <el-col :span="6">
              <span>设备模型:</span> <span class="body-bolder">物理服务器</span>
            </el-col>
            <el-col :span="6">
              <span>创建人:</span> <span class="body-bolder" style="margin-left: 23px">紫川秀</span>
            </el-col>
            <el-col :span="6" />
          </el-row>
        </div>
      </el-card>
    </el-row>
    <!-- 第二行 -->
    <el-row style="margin-top: 12px;">
      <el-card class="box-card">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="代理信息" name="first"> <agent-detail /> </el-tab-pane>
          <el-tab-pane label="硬件信息" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="系统信息" name="second1">配置管理</el-tab-pane>
          <el-tab-pane label="运行指标" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="审计日志" name="six">登录日志</el-tab-pane>
          <el-tab-pane label="带外管理" name="fourth">带外管理</el-tab-pane>
          <el-tab-pane label="用户管理" name="five"><device-user /></el-tab-pane>

        </el-tabs>

      </el-card>
    </el-row>
  </div>
</template>

<script>
import AgentDetail from './device-detail/agentDetail'
import DeviceUser from './device-detail/userList'

export default {
  name: 'DeviceDetail',
  components: { AgentDetail, DeviceUser },
  props: {
    id: {
      type: String,
      default: 0
    }
  },
  data() {
    return {
      activeName: 'second'
    }
  },
  created() {
    console.log('toid ' + this.id)
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
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
