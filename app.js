const App={
  data(){
    return{
      title: 'Notes',
      input:{
        value: '',
        placeholder:'Type your note',
      },
      change:{
        value: '',
        placeholder:'Change note',
        show: false
      },
      notes:['note 1', 'note 2'],
      changes:[false,false],
    };
  },
  mounted(){
    this.getNotes()
  },
  watch:{
    notes:{
      handler(updatedList){
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep:true
    }
  },
  methods:{
    getNotes(){
    const localNotes = localStorage.getItem('notes')
    if(localNotes){
      this.notes = JSON.parse(localNotes)
    }
  },
  onChange(index){
    this.notes[index]=this.change.value
    this.change.value=''
    this.changes[index]=false
  },
  showInput(index){
    if(this.changes[index]){
      this.changes[index]=false
    }else{
      this.changes[index]=true
    }
  },
    onSubmit(){
      this.notes.push(this.input.value)
      this.changes.push(false)
      this.input.value=''
    },
    remove(index){
      this.notes.splice(index,1)
      this.changes[index]=false
    }
  },
};

Vue.createApp(App).mount('#app');