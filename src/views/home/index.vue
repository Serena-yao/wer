<template>
    <div class="wrap">
        <div>
            <router-view></router-view>
        </div>
        <footer>
            <router-link to="/home/timeline" tag="span">
                <van-icon name="aim" />
                <span>圈子</span>
            </router-link>
            <router-link to="/home/my" tag="span">
            <van-icon name="friends-o" />
                <span>我的</span>
            </router-link>
        </footer>
    </div>
</template>
<style lang="scss" scoped>
    .wrap{
        // width:100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        &>div{
            width:100%;
            flex:1;
        }
        footer{
            width:100%;
            height: 1rem;
            align-items: center;
            display: flex;
            justify-content: space-evenly;
            font-size: .32rem
        }
    .span{
        color:#4f4d4d
    }
        }
    .router-link-active, .router-link-active span{
        color:#f76968
    }
</style>
