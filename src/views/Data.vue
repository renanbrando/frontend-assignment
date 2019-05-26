<template>
    <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id massa ut odio venenatis viverra. Ut a leo ultrices metus lobortis bibendum id ut libero.</p>
        <form @submit.prevent="checkForm">
            <div class="form-control">
                <label>Company Name</label>
                <input name="name" type="text" placeholder="e.g. Your Company Name" v-model="form.data" v-validate="'required'">
                <div class="error" v-if="errors.has('name')">{{errors.first('name')}}</div>
            </div>
            <div class="form-control">
                <label>Company Spend</label>
                <input name="spend" type="text" placeholder="e.g. $150,000" v-model="form.spend" v-validate="'required|numeric|min_value:0'"/>
                <div class="error" v-if="errors.has('spend')">{{errors.first('spend')}}</div>
            </div>
            <div class="form-control">
                <label>Company Spend Ability</label>
                <input name="ability" type="text" placeholder="e.g. $150,000 - $300,000" v-model="form.ability" v-validate="'required'"/>
                <div class="error" v-if="errors.has('ability')">{{errors.first('ability')}}</div>
            </div>
            <div class="form-control">
                <label>Notes</label>
                <textarea name="notes" type="text" placeholder="e.g. Good Tech Company" v-model="form.notes" v-validate="'required'"/>
                <div class="error" v-if="errors.has('notes')">{{errors.first('notes')}}</div>
            </div>
            <div class="form-submit">
                <button type="submit">Confirm</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Data",
    data(){
        return {
            form: {
                data: "",
                spend: "",
                ability: "",
                notes: ""
            }
        }
    },
    methods:{
        checkForm(){
            this.$validator.validateAll().then((result) => {
                if (result) {
                    alert('Form Submitted!');
                    return;
                }

                alert('Correct the errors!');
            });
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';

.error {
    margin: 16px 0px;
    color: #e63434;
}

.form-submit {
     display: flex;
     flex-direction: row-reverse;
     margin: 0px;
     padding: 0px;
     margin-right: 18%;
}

</style>

