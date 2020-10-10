<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录">
      <van-icon slot="left" name="cross" @click="$router.back()" />
    </van-nav-bar>
    <!-- 登录表单 -->
    <van-form @submit="onSubmit" ref="loginFormRef">
      <van-field name="mobile" placeholder="请输入手机号" type="number" maxlength="11" v-model="user.mobile" :rules="userFormRules.mobile">
        <i slot="left-icon" class="iconfont toutiaoshouji"></i>
      </van-field>
      <van-field name="code" placeholder="请输入验证码" type="number" maxlength="6" v-model="user.code" :rules="userFormRules.code">
        <i slot="left-icon" class="iconfont toutiaoyanzhengma"></i>
        <template #button>
          <!-- 倒计时 -->
          <van-count-down v-if="isCountDown" :time="1000 * 5" format="ss s" @finish="isCountDown = false" />
          <van-button v-else round size="small" type="default" class="send-btn" native-type="button" @click="onSendSms">获取验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-warp">
        <van-button block type="info" native-type="submit" class="login-btn"> 登录 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, sendSms } from '@/api/users'
export default {
  name: 'login',
  data() {
    return {
      // 用户登录信息
      user: {
        mobile: '',
        code: ''
      },
      // 登录表单的校验规则
      userFormRules: {
        mobile: [
          { required: true, message: '请填写手机号' },
          { pattern: /^1[3|5|7|8]\d{9}$/, message: '手机号格式不正确' }
        ],
        code: [
          { required: true, message: '请填写验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式不正确' }
        ]
      },
      //   控制是否显示倒计时
      isCountDown: false
    }
  },
  methods: {
    async onSubmit(values) {
      //   console.log('submit', values)
      // 引入Toast组件后，会自动在Vue的实例上挂载$toast方法，便于在组件内调用
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      //   发起登录请求
      try {
        const { data: res } = await login(this.user)
        this.$store.commit('setUser', res.data)
        this.$toast.success('登陆成功')
        this.$router.push('/')
      } catch (error) {
        if (error.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        } else {
          this.$toast.fail('登录失败，请稍后重试')
        }
      }
    },
    // 点击获取验证码触发的事件
    async onSendSms() {
      try {
        // 验证手机校验规则
        await this.$refs.loginFormRef.validate('mobile')
      } catch (error) {
        return console.log('验证手机号失败')
      }
      // 倒计时
      this.isCountDown = true
      // 发送验证码请求
      try {
        await sendSms(this.user.mobile)
        this.$toast('验证码发送成功')
      } catch (error) {
        if (error.response.status === 429) {
          this.$toast('验证码发送太过频繁，请稍后重试')
        } else {
          this.$toast('获取验证码失败，请稍后重试')
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.login-container {
  .iconfont {
    font-size: 37px;
  }
  .send-btn {
    width: 160px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    color: #666;
    font-size: 20px;
  }
  .login-btn-warp {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
  // /deep/ .van-button--primary {
  // border-color: #1989fa !important;
  // }
  .van-icon {
    color: #ffffff;
  }
}
</style>
