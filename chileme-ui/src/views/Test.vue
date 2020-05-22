<template>
  <div>
    <h1 @click="fn1">这是一个新的vue组件</h1>
    <div @click="fn2(val1,val2,val3)">{{val2}}</div>
    <div @click="fn3">{{val2}}</div>
    <div>{{val3}}</div>
    <div>{{val4}}</div>
    <div>{{val5}}</div>
    <div>{{val6}}</div>
    <div>{{val7}}</div>
    <div>{{val6[0]}}</div>
    <div>{{val6[1]}}</div>
    <div>{{val6[2]}}</div>
    <div @click="sendRequest">{{val7.name}}</div>
    <div>{{val7.age}}</div>
    <div>{{val7.job}}</div>
    <div v-for="i in val6" :key="i">{{i}}</div>
    <!-- <button @click="back">back</button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      val1: "字符串",
      val2: 1,
      val3: true,
      val4: undefined,
      val5: null,
      val6: ["a", "b", "c"],
      val7: {
        name: "张三",
        age: 18,
        job: "driver"
      }
    };
  },
  methods: {
    // back() {
    //   this.$router.push('/');
    // }
    fn1(){
        //  alert('fn1')
        // alert(this.val7.name)
        this.fn3()
    },
    fn2(arg,arg1,arg2){
        alert(`arg:${arg}
               arg1:${arg1}
               arg2:${arg2}
        `)
    },
    fn3(){
        // alert('fn3')
        
    },
    sendRequest(){
           { this.Axios({
                method:'GET',
                url:'api/carts/queryCartsData',
                data:{},
            }).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })}
        }
  }
};
</script>
<style lang="scss" scoped>

</style>