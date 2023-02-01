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
            <v-btn color="deep-purple " dark :to="{name:'home'}">Home</v-btn>
         </v-list-item-content >

         <v-list-item-content>
            <v-btn color="deep-purple" dark :to="{name:'tareas-crud'}">Lista Tareas</v-btn>
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