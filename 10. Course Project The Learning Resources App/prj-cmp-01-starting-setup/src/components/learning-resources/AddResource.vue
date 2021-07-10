<template>
    <BaseDialog
        v-if="inputIsValid"
        title="Invalid Input"
        @close="confirmError"
    >
        <template #default>
            <p>Atleast One input Value is invalid</p>
            <p>Make sure you enter atleat a few characters</p>
        </template>
        <template #actions>
            <BaseButton @click="confirmError">Okay</BaseButton>
        </template>
    </BaseDialog>
    <BaseCard>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" ref="titleInput" />
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description" rows="3" ref="descInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" id="link" ref="linkInput"/>
            </div>
            <div>
                <BaseButton type="submit">Add Resource</BaseButton>
            </div>
        </form>
    </BaseCard>
</template>

<script>
export default {
    inject: ['addResource'],
    data() {
        return {
            inputIsValid: false
        }
    },
    methods: {
        submitData() {
            const enteredTitle = this.$refs.titleInput.value
            const enteredDescription = this.$refs.descInput.value
            const enteredUrl = this.$refs.linkInput.value

            if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredUrl.trim() === '') {
                this.inputIsValid = true
                return;
            }

            this.addResource(enteredTitle, enteredDescription, enteredUrl)
        },
        confirmError() {
            this.inputIsValid = false
        }
    }
}
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>
