<template>
    <div class="record-form-component">
        <form @submit.prevent="handleSubmit">
            <h4>Agregar Registro</h4>
            <div class="form-group">
                <label class="form-label">Descripción</label>
                <input type="text" class="form-control" v-model="record.description">
            </div>
            <div class="form-group">
                <label class="form-label">Cantidad</label>
                <input type="number" class="form-control" v-model="record.amount" @focus="handleInputAmoutFocus">
            </div>

            <tags :tags="savedTags" :selected-tags="record.tags" :tag-added="handleTagAdded" :tag-removed="handleTagRemoved"></tags>
            <button class="btn btn-primary btn-block">Guardar</button>
        </form>
    </div>
</template>
<script>
import Tags from '@/components/Tags';

import {
    mapGetters,
    mapActions
} from 'vuex';

var newRecord = function () {
    return {
        amount: 0,
        isIncome: false,
        description: '',
        date: null,
        tags: []
    };
}

export default {
    name: 'RecordForm',
    components: {
        Tags
    },
    created() {
        this.$store.dispatch('fetchTags');
    },
    data() {
        return {
            record: newRecord()
        }
    },
    computed: {
        ...mapGetters({
            'savedTags': 'savedTags'
        })
    },
    methods: {
        resetForm() {
            this.record = newRecord();
        },
        handleSubmit() {
            this.record.date = new Date().toISOString();
            this.record.amount = parseInt(this.record.amount, 10);
            this.addRecord(this.record);
            this.resetForm();
        },
        handleTagAdded(tag) {
            if (this.record.tags.indexOf(tag) < 0) {
                this.record.tags.push(tag);
            }
        },
        handleTagRemoved(tag) {
            var index = this.record.tags.indexOf(tag);
            if (index >= 0) {
                this.record.tags.splice(index, 1);
            }
        },
        handleInputAmout(e) {
            e.target.value = numeral(e.target.value).format('$ 0,0[.]00');
            this.record.amount = e.target.value;
        },
        handleInputAmoutFocus(e) {
            e.target.select();
        },
        ...mapActions({
            addRecord: 'addRecord'
        })
    }
}
</script>
