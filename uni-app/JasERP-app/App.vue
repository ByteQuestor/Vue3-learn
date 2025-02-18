<script>
	//应用的生命周期比页面的长，仅此而已
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		//全局方法
		methods: {
			doSomeThing() {
				console.log("获取到了用户信息")
			}
		},
		//全局数据
		globalData: {
			userNickName: '王子阳',
			userInfo: {
				name: '王子阳',
				age: 23,
			},
			httpUrl: 'localhost:88888888888888888'
		},
		//全局方法

	}
</script>

<style>
	/*每个页面公共css */
</style>