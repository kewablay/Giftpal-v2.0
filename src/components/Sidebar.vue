dist
<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4 bg-dark-green">
        <!-- Brand Logo -->
        <router-link  to="/" class="brand-link">
            <img src="/assets/img/gtl_white.png" alt="GTL Logo" class="brand-image elevation-3"
                 style="opacity: .8">
            <!--<span class="brand-text font-weight-light">AdminLTE 3</span>-->
        </router-link>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <!--<div class="user-panel mt-3 pb-3 mb-3 d-flex">-->
            <!--<div class="image">-->
            <!--<img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">-->
            <!--</div>-->
            <!--<div class="info">-->
            <!--<a href="#" class="d-block">Admin User</a>-->
            <!--</div>-->
            <!--</div>-->

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu"
                    data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
                         with font-awesome or any other icon font library -->
                    <li class="nav-header">DASHBOARD</li>
                    <li class="nav-item">
                        <router-link to="/internship" class="nav-link" id="judges">
                            <i class="nav-icon fas fa-home"></i>
                            <p>
                                Home
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/certificate" class="nav-link" id="certificate">
                            <i class="nav-icon fas fa-certificate"></i>
                            <p>
                                Certificate
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/internship-report" class="nav-link" id="reports">
                            <i class="nav-icon fas fa-chart-pie"></i>
                            <p>
                                Reports
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/weekly-logbook" class="nav-link" id="weekly_report">
                            <i class="nav-icon fas fa-clipboard"></i>
                            <p>
                                Weekly Log
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/attendance" class="nav-link" id="attendance">
                            <i class="nav-icon fas fa-clock"></i>
                            <p>
                                Attendance
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/job-resources" class="nav-link" id="job_resources">
                            <i class="nav-icon fas fa-boxes"></i>
                            <p>
                                Job Resources
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/training" class="nav-link" id="training">
                            <i class="nav-icon fas fa-image"></i>
                            <p>
                                Training
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-header">Extras</li>

                    <li class="nav-item">
                        <router-link to="/talent" class="nav-link" id="talents">
                            <i class="nav-icon fas fa-brain"></i>
                            <p>
                                Talents
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/jobs" class="nav-link" id="events">
                            <i class="nav-icon fas fa-calendar-check"></i>
                            <p>
                                Jobs
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/news" class="nav-link" id="news">
                            <i class="nav-icon fas fa-newspaper"></i>
                            <p>
                                News
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/career" class="nav-link" id="career">
                            <i class="nav-icon fas fa-user-md"></i>
                            <p>
                                Career Tips
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/scholarship" class="nav-link" id="scholarship">
                            <i class="nav-icon fas fa-school"></i>
                            <p>
                                Scholarship
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/events" class="nav-link" id="job_fair">
                            <i class="nav-icon fas fa-grin-wink"></i>
                            <p>
                               Events
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="'/profile/'+$store.state.userInfo.applicant_id" class="nav-link" id="">
                            <i class="nav-icon fas fa-user"></i>
                            <p>
                                Profile
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/logout" class="nav-link" id="logout">
                            <i class="nav-icon fas fa-sign-in-alt"></i>
                            <p>
                                Logout
                            </p>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
