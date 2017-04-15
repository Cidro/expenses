<template>
    <div class="tag-component">
        <div>
            <span class="label label-default" v-for="t in selectedTags" @click="removeTag(t)">{{ t }}</span>
        </div>
        <div class="form-group">
            <label>Tags</label>
            <div class="input-group">
                <input type="text" class="form-control" v-model="tag" @keydown.enter.prevent="addTag(tag)">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button" @click="addTag(tag)">
                        <span class="glyphicon glyphicon-plus"></span>
                    </button>
                </span>
            </div>
        </div>
        <div class="list-group">
            <a class="list-group-item" @click="addTag(t)" v-for="t in foundTags">{{t}}</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Tags',
    props: {
        tags: {
            type: Array,
            default: function () {
                return [];
            }
        },
        selectedTags: {
            type: Array,
            default: function () {
                return [];
            }
        },
        tagAdded: {
            type: Function
        },
        tagRemoved: {
            type: Function
        }
    },
    data() {
        return {
            tag: ''
        }
    },
    computed: {
        foundTags() {
            if (this.tag != '') {
                return this.tags.filter((tag) => {
                    return tag.toLowerCase().indexOf(this.tag) >= 0;
                });
            } else {
                return [];
            }
        }
    },
    methods: {
        addTag(tag) {
            if(tag){
                this.tagAdded(tag);
                this.tag = '';
            }
        },
        removeTag(tag) {
            this.tagRemoved(tag);
        }
    }
}
</script>
<style scoped>
.label {
    display: inline-block;
    margin-right: 5px;
    padding: 6px 8px;
}
</style>
