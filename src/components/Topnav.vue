<template>
    <nav class="main-header navbar navbar-expand  navbar-dark navbar-cyan bg-dark-green">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link text-light" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block ml-4">
                <a class="nav-link text-light">{{title}}</a>
            </li>
        </ul>

        <!-- SEARCH FORM -->
        <!--<form class="form-inline ml-3">-->
            <!--<div class="input-group input-group-sm">-->
                <!--<input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">-->
                <!--<div class="input-group-append">-->
                    <!--<button class="btn btn-navbar" type="submit">-->
                        <!--<i class="fas fa-search"></i>-->
                    <!--</button>-->
                <!--</div>-->
            <!--</div>-->
        <!--</form>-->

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
             <!--Messages Dropdown Menu -->
            <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#">
                    <img v-lazy="($store.state.userInfo ||{}).profile_pic" alt="User Avatar" class="img-size-32 img-circle">
                    {{($store.state.userInfo ||{}).first_name}}
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <router-link :to="'/profile/'+$store.state.userInfo.applicant_id" class="dropdown-item">
                        Profile
                    </router-link>
                    <router-link to="/logout" class="dropdown-item">
                        Logout
                    </router-link>
                </div>
            </li>
            <!-- Notifications Dropdown Menu -->
            <!--<li class="nav-item dropdown">-->
                <!--<a class="nav-link" data-toggle="dropdown" href="#">-->
                    <!--<i class="far fa-bell"></i>-->
                    <!--<span class="badge badge-warning navbar-badge">15</span>-->
                <!--</a>-->
                <!--<div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">-->
                    <!--<span class="dropdown-item dropdown-header">15 Notifications</span>-->
                    <!--<div class="dropdown-divider"></div>-->
                    <!--<a href="#" class="dropdown-item">-->
                        <!--<i class="fas fa-envelope mr-2"></i> 4 new messages-->
                        <!--<span class="float-right text-muted text-sm">3 mins</span>-->
                    <!--</a>-->
                    <!--<div class="dropdown-divider"></div>-->
                    <!--<a href="#" class="dropdown-item">-->
                        <!--<i class="fas fa-users mr-2"></i> 8 friend requests-->
                        <!--<span class="float-right text-muted text-sm">12 hours</span>-->
                    <!--</a>-->
                    <!--<div class="dropdown-divider"></div>-->
                    <!--<a href="#" class="dropdown-item">-->
                        <!--<i class="fas fa-file mr-2"></i> 3 new reports-->
                        <!--<span class="float-right text-muted text-sm">2 days</span>-->
                    <!--</a>-->
                    <!--<div class="dropdown-divider"></div>-->
                    <!--<a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>-->
                <!--</div>-->
            <!--</li>-->
            <!--<li class="nav-item">-->
                <!--<a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">-->
                    <!--<i class="fas fa-th-large"></i>-->
                <!--</a>-->
            <!--</li>-->
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Top-Nav",
        props: {
            title: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
