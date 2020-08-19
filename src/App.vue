<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body{
  color:#343434;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
.w{
  width:1200px;
  margin:0 auto;
}
.center{
  width: 1000px;
  margin: 0 auto;
}
a{
  color: #343434;
  text-decoration:none;
  cursor:pointer;
  &:hover{
    color:#ea5513;
  }
}
</style>
