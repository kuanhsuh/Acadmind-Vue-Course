<template>
  <TheHeader />
  <button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
  <button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>
  <!-- <ActiveGoals v-if="selectedComponent === 'ActiveGoals'"/>
    <ManageGoals v-if="selectedComponent === 'ManageGoals'"/> -->
<keep-alive>
  <component :is="selectedComponent"></component>
</keep-alive>
  <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
        <template #default="slotProps">
          <h2>
            {{slotProps.item}}
          </h2>
          <p>{{slotProps['another-prop']}}</p>
        </template>
    </course-goals>
  </div> -->
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    // 'the-header': TheHeader
    TheHeader: TheHeader,
    // UserInfo: UserInfo,
    // BadgeList: BadgeList,
    // CourseGoals: CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "ManageGoals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      console.log(cmp);
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
