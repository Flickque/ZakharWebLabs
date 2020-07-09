<template>
  <div class="hello">
	<ul>
		<li v-for="task in tasks" :key="task.id">{{ task.name }}<input type="checkbox" :value="task" v-model="checked" @click="removeTask(task)"></li>
	</ul>
	<div id="add-inputs">
		<input type="text" id="text" v-model="task">
		<input type="submit" id="add" value="Добавить" @click="addTask">
		<input type="submit" id="del" value="Удалить" @click="removeChecked">
	</div>

<span>Отмеченные задачи: {{ checked }}</span>


  </div>

</template>

<script>
const axios = require('axios');
export default {

data() {
        return {
            tasks: [],
            error: false,
            task: "",
            checked: [],
            checkedNames: []
        }
    },
    created() {
        this.getTasks();
    },
    methods: {
        getTasks: async function() {
            await axios.get('https://kodaktor.ru/j/tasklist')
                .then(response => {
                    response.data.list.forEach(task => {
                        task = {
                            id: Date.now() + task,
                            name: task
                        };
                        this.tasks.push(task);
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        },
        addTask: function() {
            if (this.task)
                this.tasks.push({
                    id: Date.now() + this.task,
                    name: this.task
                });
        },
        removeTask: function() {

            //this.tasks = this.tasks.filter(item => item.id !== task.id);			
            //this.tasks.splice(index,1);
            //this.tasks = this.tasks.filter(function (i) {
            //            return i.id !== task.id;});
        },
        removeChecked: function() {
            for (let i = 0; i < this.checked.length; i++) {
                let index = this.tasks.findIndex(n => n.id === this.checked[i].id);
                if (index !== -1) {
                    this.tasks.splice(index, 1);
                }
            }
        },
    }
}

</script>


<style type="text/css">
	body{
		zoom: 200%;
	}
	ul{
    list-style-type: none;
	}
	ul li{
		margin-bottom: 5px;
	}

</style>