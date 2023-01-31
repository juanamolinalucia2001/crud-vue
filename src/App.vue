<template>
  <v-app>
   <v-card
    flat
    height="200px"
    tile
  >
    <v-toolbar dense class="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Crud en Vue</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    
    </v-card>

     <v-navigation-drawer
      v-model="drawer" temporary app>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>


      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
         <v-list-item-content>
            <v-btn color="success" :to="{name:'home'}">Home</v-btn>
         </v-list-item-content >

         <v-list-item-content>
            <v-btn color="success" :to="{name:'tareas-crud'}">Lista Tareas</v-btn>
         </v-list-item-content>
        
      </v-list>
    </v-navigation-drawer>



    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      drawer:true
    }
  }
};
</script>
