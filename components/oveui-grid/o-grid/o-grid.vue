<template>
	<view class="o-grid-wrap">
		<view :class="title?'o-title':'space'">{{title}}</view>
		<view :class="['o-grid', Col, Square, Gutter, Radius, Border]">
			<slot />
		</view>
	</view>
</template>

<script>
	
	/* Grid 宫格组件 */
	
	export default {
		name:'o-grid',
		props:{
			col:{
				type:[Number,String],
				default:3
			},
			title:{
				type:String,
				default:''
			},
			square:{
				type:[Boolean,String],
				default:false
			},
			iconSize:{
				type:String,
				default:'md'
			},
			border:{
				type:[Boolean,String],
				default:true
			},
			gutter:{
				type:[Boolean,String],
				default:false
			},
			radius:{
				type:[Boolean,String],
				default:false
			}
		},
		
		provide() {
			return {
				gutter:this.gutter,
				// square:this.square,
				border:this.border,
				iconsize:this.iconSize,
				radius:this.radius
			};
		},
		computed:{
			Square(){
				if (this.square == 'false' || !this.square) return '';
				else return 'square'
			},
			Gutter(){
				if (this.gutter == 'false' || !this.gutter) return '';
				else return 'gutter'
			},
			Radius(){
				if (this.radius == 'false' || !this.radius) return '';
				else return 'radius'
			},
			Col(){
				if (this.col < 3) return 'col-2';
				else if(this.col > 4) return 'col-5';
				else return 'col-' + this.col;
			},
			Border(){
				if(!this.border || this.border==0 || this.gutter) return 'noborder';
				else return '';
			},
		}
	}
</script>

<style lang="scss">
	
	$u:8rpx;
	
	.o-grid-wrap{background-color:#f6f6f6;}
	.o-title{
		font-size: 14px;
		color: #333;
		background-color: #f6f6f6;
		height: 30px;
		line-height: 30px;
		position: relative;
		padding-left:$u * 5;
		padding-top: $u * 1.8;
		box-sizing: content-box;
		&::after{
			position: absolute;
			content: "";
			left: 8px;
			top: 16px;
			height: 12px;
			width: 3px;
			border-radius: 30px;
			background-color: #999;
			z-index: 2;
		}
	}

	.o-grid{		overflow-x: hidden;		/* #ifndef MP */		flex-direction:row;
		display:flex;
		/* #endif */
		box-sizing:border-box;
		flex-wrap:wrap;		/* #ifdef MP */		&::before,&::after{display:table;content:'';}
		&::after{clear:both;}
		/* #endif */
		&.gutter,&.gutter.square{
			padding:$u * 2 0 0 $u * 2;
		}

	}

</style>
