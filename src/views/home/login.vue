<template>
    <div class="big">
        <div class="header">
            <p>圈子登录</p>
        </div>
        <div class="main">
            <div class="content">
                <div class="input">
                    <input class="ipt" type="text" placeholder="用户名">
                    <input class="ipt" type="text" placeholder="登录密码">
                </div>
                <button class="btn" v-click="btn()">登录</button>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>
<script>
export default {
        methods: {
        btn(){
            this.props.history.push(`/home/timeline`)
        }
    },

}
</script>
<style lang="scss" scoped>
    *{
        list-style-type: none;
        padding:0;
        margin:0;
    }
    .big{
        width:100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .header{
        width:100%;
        height: 1rem;
        line-height: 1rem;
        align-items: center;
        text-align: center;
        font-size: .32rem;
        background: #ccc;
    }
    .main{
            width:100%;
            flex:1;
            overflow: auto;
        .content{
            .input{
                width:100%;
                // align-items: center;
                .ipt{
                    width:7rem;
                    height: 1rem;
                    padding-left: .2rem;
                    border:none;
                    background: #ccc;
                    margin-top: .1rem;
                    margin-left: .2rem;
                }
            }
            .btn{
                    width:7rem;
                    height: 1rem;
                    border:none;
                    background:#F76968;
                    margin-top: .1rem;
                    margin-left: .2rem;
                    color:#fff;
            }
        }
    }
    .footer{
        width:100%;
        height: 1rem;
        background: gray;
    }
</style>
