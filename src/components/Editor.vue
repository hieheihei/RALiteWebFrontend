<template>
  <div>
    <froala id="edit" :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>
</template>

<script>
 import FroalaEditor from 'froala-editor'

 FroalaEditor.DefineIcon('alert', {NAME: 'info', SVG_KEY: 'help'});
 FroalaEditor.RegisterCommand('alert', {
   title: 'Hello',
   focus: false,
   undo: false,
   refreshAfterCallback: false,
   callback: function () {
     alert('Hello!');
   }
  });

export default {
  name: 'Editor',
  data () {
    return {
      config: {
        events: {
          initialized: function () {
            console.log('froala editor initialized')
          },
        },
        charCounterCount: false,
        quickInsertEnabled: false,
        attribution: false,
        placeholderText: 'Edit RA Statement Here!',
        toolbarButtons: [ ['alert']]
      },
      model: ''
    }
  }
}
</script>