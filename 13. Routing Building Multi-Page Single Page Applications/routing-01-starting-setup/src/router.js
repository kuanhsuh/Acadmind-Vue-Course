import {
    createRouter,
    createWebHistory
} from 'vue-router'

import TeamsList from './components/teams/TeamsList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import UsersList from './components/users/UsersList.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            redirect: '/teams'
        },
        {
            name: 'teams',
            path: '/teams',
            meta: { needsAuth: true },
            components: { default: TeamsList, footer: TeamsFooter },
            // component: TeamsList,
            children: [{
                name: 'team-members',
                path: ':teamId',
                component: TeamMembers,
                props: true
            }]
        },
        {
            path: '/users',
            components: { default: UsersList, footer: UsersFooter },
            // beforeEnter(to, from, next) {
            //     console.log( to, from, next)
            // }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
            // redirect: '/teams'
        }

    ],
    linkActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition)
        if(savedPosition) {
            return savedPosition
        }
        return {left: 0, top: 0}
    }
})

router.beforeEach(function(to, from, next) {
    // if(to.meta.needsAuth) {
    //     console.log('Needs Auth!')
    //     next()
    // }
    // next(true)
    // next(false)
    // if(to.name ==='team-members') {
    //         next()
    //     } else {
    //         next('/teams/t2')
    //     next({ name: 'team-members', params: { teamId: 't2'}})
    // }
    // next();
})

// router.afterEach(function(to, from) {
//     //
// })
