<template>
  <el-menu
    :unique-opened="true"
    :default-active="$route.path"
    class="el_sidebar"
    :collapse="collapse"
  >
    <el-menu-item
      class="subSysName"
      index="/index"
      :style="{color:theme}"
      @click="linkTo('/')"
    >
      <span slot="title" @click="collapse = !collapse">{{subSysName}}</span>
    </el-menu-item>

    <el-submenu
      v-for="i in routes"
      :key="i.id"
      :index="i.id"
      v-if="i.children.length>0"
    >
      <template slot="title">
        <svg-icon :icon-class="i.icon"/>
        <span slot="title">{{i.name}}</span>
      </template>
      <el-menu-item
        v-for="ii in i.children"
        :key="ii.path"
        :index="ii.path"
        @click.native="linkTo(ii.path)">
        <svg-icon :icon-class="ii.icon"/>
        <span slot="title">{{ii.name}}</span>
      </el-menu-item>
    </el-submenu>

    <el-menu-item
      v-else
      :index="i.id"
      @click.native="linkTo(i.path)">
      <svg-icon :icon-class="i.icon"/>
      <span slot="title">{{i.name}}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
    export default {
        name: "sideBar",
        data() {
            return {
              subSysName: '商户后台管理系统',
              collapse: false,
              routes: [
                {
                  icon:'subaccount',
                  name: '子账户管理',
                  id: '6',
                  children: [
                    {
                      icon:'subaccount_list',
                      name: '子账户列表',
                      path: '/subaccount/list'
                    }
                  ]
                },
                {
                  icon:'business',
                  name: '商家管理',
                  id: '7',
                  children: [
                    {
                      icon:'business_list',
                      name: '商家列表',
                      path: '/business/list'
                    }
                  ]
                },
                {
                  icon:'examines',
                  name: '面审管理',
                  id: '8',
                  children: [
                    {
                      icon:'examines_list',
                      name: '面审列表',
                      path: '/examines/list'
                    }
                  ]
                },
                {
                  icon:'financial',
                  name: '财务管理',
                  id: '2',
                  children: [
                    {
                      icon:'receivables',
                      name: '应收款列表',
                      path: '/financial/receivables'
                    },
                    {
                      icon:'voucher',
                      name: '财务凭证列表',
                      path: '/financial/voucher'
                    },
                    {
                      icon:'detailed',
                      name: '收支详细列表',
                      path: '/financial/detailed'
                    },
                    {
                      icon:'financial_list',
                      name: '财务列表',
                      path: '/financial/list'
                    }
                  ]
                },
                {
                  icon:'order',
                  name: '订单管理',
                  id: '3',
                  children: [
                    {
                      icon:'order_list',
                      name: '订单列表',
                      path: '/order/list'
                    },
                    {
                      icon:'cancel',
                      name: '退订列表',
                      path: '/order/cancel'
                    },
                    {
                      icon:'recharge',
                      name: '充值列表',
                      path: '/order/recharge'
                    }
                  ]
                },
                {
                  icon:'goods',
                  name: '商品管理',
                  id: '4',
                  children: [
                    {
                      icon:'goods_list',
                      name: '产品列表',
                      path: '/goods/list'
                    },
                    {
                      icon:'broadband',
                      name: '宽带产品',
                      path: '/goods/broadband'
                    }
                  ]
                },
              ],

            }
        },
        methods: {
          linkTo(path) {
            this.$router.push(path) //跳转到其他系统
          },

          //获取用户权限列表
          getUserAuthList: function () {
            let auths = [];
            let link = {};
            let flink = [];
            const loading = this.$loading({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            getAuthList(this.id).then(({data}) => {
              auths = data;
              auths.forEach(function (element, index, array) { //主菜单
                // element: 指向当前元素的值
                // index: 指向当前索引
                // array: 指向Array对象本身
                if (element.fid === '0') {
                  link =
                    {
                      path: element.url,
                      id: element.id,
                      name: element.title,
                      children: []
                    }
                  flink.push(link);
                }
              });
              flink.forEach(function (el, idx, arr) { //子菜单
                auths.forEach(function (e, i, a) {
                  if (e.fid === el.id) {
                    flink[idx]['children'].push({
                      path: e.url, id: e.id, name: e.title
                    })
                  }
                })
              });
              console.log(flink)
              this.routes = flink;
              loading.close()
            }).catch(() => {
              loading.close()
            });

          },

        },
      computed: {
        theme: function () {
          return this.$store.state.user.theme || localStorage.theme || 'black'
        }
      },
    }
</script>

<style scoped>
  .subSysName {
    height: 74px;
    line-height: 74px;
    background: #EBEEF5;
    font-family: cursive;
    border-bottom: 1px solid #dedede;
    font-size: 16px;
    text-align: center;
    transition: all .2s ease-in-out
  }

  .subSysName:hover {
    background: #d0d4dc;
  }

  .el_sidebar:not(.el-menu--collapse){
    height: 100%;
    background-color: #E4E7ED;
  }

  .el-submenu .el-menu-item {
    height: 45px;
    line-height: 45px;
    font-size: 12px;
    min-width: 160px;
  }
</style>
