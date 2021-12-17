<template>
  <div class="container" id="contentItem">
    <div class="row text-center">
      <div
        class="col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-12 p-3 error-main"
      >
        <div class="row">
          <div class="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
            <h1 class="m-0">404</h1>
            <h6>Page not found</h6>
            <p>
              Sorry the page your looking for cannot be found.
              <br />
              <span class="text-green">
                <router-link to="/">GO TO HOME</router-link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#contentItem {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
