<template>
  <div id="app">
    <nav class="deep-purple accent-1 nav">
      <router-link to="/">Home</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/create-event">Create Event</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  & a {
    font-size: 20px;
    &:last-child {
      margin-right: 30px;
    }
    &:first-child {
      margin-left: 30px;
    }
  }
}
</style>
