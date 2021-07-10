<template>
    <BaseCard>
        <BaseButton
            @click="setSelectedTab('StoredResources')"
            :mode="storedResButtonMode">
            Store Resource</BaseButton>
        <BaseButton @click="setSelectedTab('AddResource')" :mode="addResButtonMode">Add Resource</BaseButton>
    </BaseCard>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        StoredResources,
        AddResource
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'StoredResources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'AddResource' ? null : 'flat';
        }
    },
    data() {
        return {
            selectedTab: "StoredResources",
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The offical Vue documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The offical Vue documentation',
                    link: 'https://vuejs.org'
                }
            ]
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, link) {
            const newResource = {
                id: new Date().toISOString(),
                title,
                description,
                link
            }
            this.storedResources.unshift(newResource)
            this.setSelectedTab('StoredResources')
        },
        removeResource(resId) {
            const resIndex = this.storedResources.findIndex(res => res.id === resId)
            // this.storedResources = this.storedResources.filter(res => res.id !== resId)
            this.storedResources.splice(resIndex, 1)
        }
    }
}
</script>
