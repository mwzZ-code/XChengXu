Page({
  data:{ posts:[] },
  onLoad(q){
    const category = q.category || "全部";
    wx.setNavigationBarTitle({ title: `分类：${category}` });
    this.setData({ posts:[
      { _id:"c1", title:"家教可线上", price:"¥100/小时", region:"徐汇", category:"本地服务", time:"昨天", description:"数学/英语都可" }
    ]});
  },
  goDetail(e){ wx.navigateTo({ url:`/pages/post-detail/post-detail?id=${e.currentTarget.dataset.id}` }) }
});
