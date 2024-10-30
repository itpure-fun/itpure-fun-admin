<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import user from '@/api/user/user'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, id, statusName) => {
  user.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'user',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: false,
  operationColumnWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: user.getList
})

const columns = reactive([
  {
    title: "用户id",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入用户id"
    }
  },
  {
    title: "用户昵称",
    dataIndex: "nick_name",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "性别 0男1女",
    dataIndex: "sex",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "密码盐",
    dataIndex: "salt",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "密码",
    dataIndex: "password",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "手机",
    dataIndex: "phone",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "邮箱",
    dataIndex: "email",
    formType: "input",
    search: true,
    addDisplay: false
  },
  {
    title: "头像",
    dataIndex: "avatar",
    formType: "input",
    addDisplay: false
  },
  {
    title: "用户状态 0正常 1禁用",
    dataIndex: "status",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入用户状态 0正常 1禁用"
    }
  },
  {
    title: "备注",
    dataIndex: "remarks",
    formType: "input",
    hide: true
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入创建时间"
    },
    showTime: true
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入更新时间"
    },
    showTime: true
  },
  {
    title: "删除时间",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  }
])
</script>
<script> export default { name: 'user:' } </script>