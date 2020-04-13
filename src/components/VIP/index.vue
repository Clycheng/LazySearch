<template>
  <div>
    <el-header>
      <Header></Header>
    </el-header>
    <div style="height: 2970.74px; overflow: hidden;">
      <div class="club-A-qFT_0" style="transform: scale(0.45944);">
        <!---->
        <div class="club-banner-user-2FxKK_0">
          <div>
            <a>加入极光世界 &gt;</a>
            <a>尽享懒搜生活 &gt;</a>
          </div>
        </div>
        <div class="club-buy-3E1qI_0">
          <h4 class="club-subtitle-3hv93_0">选择极光VIP会员套餐</h4>
          <div class="club-buy-type-1iVyz_0">
            <div class="club-buy-type-item-12DKg_0 club-buy-type-item-gold-2quMC_0">
              <div>
                <img src="../../assets/vipicon.png" />
                <span>极光金牌会员</span>
              </div>
              <h5>
                送
                <span>65000</span> 点加成卡
              </h5>
              <h5>
                持钻奖励
                <span>7.2%</span> (年化)
              </h5>
              <p>¥ 2298/年</p>
            </div>
            <div class="club-buy-type-item-12DKg_0 club-buy-type-item-platina-27h_S_0">
              <div>
                <img src="../../assets/vipicon2.png" />
                <span>极光白金会员</span>
              </div>
              <h5>
                送
                <span>200000</span> 点加成卡
              </h5>
              <h5>
                持钻奖励
                <span>8.2%</span> (年化)
              </h5>
              <p>¥ 6498/年</p>
            </div>
          </div>
          <!---->
        </div>
        <div class="club-date-select-1YFaw_0">
          <h4 class="club-subtitle-3hv93_0">会员有效期</h4>
          <div
            class="club-date-select-item-32HBM_0"
            v-for="(item,index) in relations"
            :key="index"
            :class="{'club-date-select-item-active-3oMot_0':currentSort==index}"
            @click="active(index)"
          >
            <div class="club-date-select-item-content-1ozGJ_0">
              <span class="time-3tZ3H_0">{{item.date}}</span> |
              <span class="price-1nCxv_0">{{item.price}}</span>
            </div>
            <i class="iconfont ic-selected"></i>
          </div>
          <button class="club-buy-btn-2N9Tp_0 club-buy-btn-bronze-3GBra_0" @click="btnpay">立即购买</button>
        </div>
        <div class="club-privilege-1bZZN_0">
          <h4 class="club-subtitle-3hv93_0">
            极光会员特权
            <span>
              特权说明
              <i class="iconfont ic-link"></i>
            </span>
          </h4>
          <div class="club-privilege-card-10Uv3_0">
            <div class="club-privilege-card-item-3XR9t_0 club-privilege-card-item-bronze-duCFF_0">
              <h5>送5000点收益加成卡</h5>
              <p>
                持卡点赞，
                <b>每日收益预计提升&gt;100%</b>
              </p>
              <p>会员到期后失效</p>
            </div>
          </div>
          <!---->
          <div class="club-privilege-item-2h_Vs_0">
            <span class="club-privilege-item-bronze-xSp4A_0">
              <i class="iconfont ic-huiyuanbiaoshi"></i>
            </span>
            专属会员徽标
          </div>
          <div class="club-privilege-item-2h_Vs_0">
            <span class="club-privilege-item-bronze-xSp4A_0">
              <i class="iconfont ic-quguanggao"></i>
            </span>
            双向去广告
          </div>
          <div class="club-privilege-item-2h_Vs_0">
            <span class="club-privilege-item-bronze-xSp4A_0">
              <i class="iconfont ic-icon_double"></i>
            </span>
            任务加成卡翻倍
          </div>
          <div class="club-privilege-item-2h_Vs_0">
            <span class="club-privilege-item-bronze-xSp4A_0">
              <i class="iconfont ic-ic_article"></i>
            </span>
            付费文章
          </div>
          <div class="club-privilege-item-2h_Vs_0">
            <span class="club-privilege-item-bronze-xSp4A_0">
              <i class="iconfont ic-guanzhushangxian"></i>
            </span>
            关注上限达2000
          </div>
          <div class="club-privilege-item-2h_Vs_0">
            <span class="club-privilege-item-bronze-xSp4A_0">
              <i class="iconfont ic-youhuiquan"></i>
            </span>
            付费内容优惠券
          </div>
          <div class="club-privilege-item-2h_Vs_0">
            <span class="club-privilege-item-bronze-xSp4A_0">
              <i class="iconfont ic-ic_nickname"></i>
            </span>
            修改昵称
          </div>
          <div class="club-privilege-item-2h_Vs_0">
            <span class="club-privilege-item-bronze-xSp4A_0">
              <i class="iconfont ic-rigengtiaozhan"></i>
            </span>
            日更挑战复活卡
          </div>
          <div class="club-privilege-item-2h_Vs_0">
            <span class="club-privilege-item-bronze-xSp4A_0">
              <i class="iconfont ic-ic_publish"></i>
            </span>
            定时发布文章
          </div>
          <div class="club-privilege-item-2h_Vs_0">
            <span class="club-privilege-item-bronze-xSp4A_0">
              <i class="iconfont ic-icon_picshare"></i>
            </span>
            图片分享模板
          </div>
          <div class="club-privilege-item-2h_Vs_0">
            <span class="club-privilege-item-bronze-xSp4A_0">
              <i class="iconfont ic-gengduo"></i>
            </span>
            敬请期待
          </div>
          <img src="../../assets/viptext.png" />
        </div>
        <div class="club-divider-S8z80_0"></div>
        <div class="club-mall-306C3_0">
          <h4 class="club-subtitle-3hv93_0">
            极光优惠
            <span>
              极光会员享
              <b>9.7折</b>
              <i class="iconfont ic-link"></i>
            </span>
          </h4>
          <p>专注你的品质生活，极光商城一站式购物平台</p>
          <img src="../../assets/vipshop.png" />
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "../header/Head";
export default {
  name: "VIP",
  data() {
    return {
      relations: [
        { date: "月度（31天）", price: "¥18" },
        { date: "季度（93天）", price: "¥50" },
        { date: "年度（372天）", price: "¥188" }
      ],
      currentSort: 0
    };
  },
  components: {
    Header
  },
  methods: {
    active(index) {
      this.currentSort = index;
    },
    btnpay() {
      const weiXinUrl = require("../../assets/hao.png");
      const aLiUrl = require("../../assets/lei.png");
      this.$alert(
        "<strong><img src=" +
          weiXinUrl +
          " width=192px height=192px><img src=" +
          aLiUrl +
          " width=192px height=192px></strong>",
        "请扫描下方二维码进行支付：",
        {
          dangerouslyUseHTMLString: true
        }
      ).then(action => {});
    }
  }
};
</script>

<style scoped>
@import url("../../assets/css/vip01.css");
@import url("../../assets/css/vip02.css");
.ic-selected {
  color: #e4e1e1;
  font-size: 4.266667vw;
}
.el-header {
  padding: 0;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
</style>