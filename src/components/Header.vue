<template>
  <div>
   <v-card
    flat
    tile
  >
    <v-toolbar dense class="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Crud en Vue</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    
    </v-card>

     <v-navigation-drawer
      v-model="drawer" temporary app align="center" justify="center">
      <v-list-item center>
        <v-list-item-avatar class="ml-auto mr-auto mt-10">
          <v-img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" ></v-img>
        </v-list-item-avatar>

      </v-list-item>
      <v-list-item>
        <v-list-item-title class="text-h5">John Leider</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list class="flex-colum-center">
         <v-list-item-content class="mr-10 ml-10">
            <v-btn color="deep-purple"  dark :to="{name:'home'}">Home</v-btn>
         </v-list-item-content >

         <v-list-item-content class="mr-10 ml-10" >
            <v-btn  color="deep-purple"   dark :to="{name:'tareas-crud'}">List Task</v-btn>
         </v-list-item-content>
        
      </v-list>
    </v-navigation-drawer>

  </div>
</template>


<script>
export default {
     name: 'Header',
    data(){
    
        return{
            drawer:true,
        }
    }
}
</script>