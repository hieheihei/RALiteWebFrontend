<template>
	<div>
		<froala id="edit" :tag="'textarea'" :config="config" v-model="userInput"></froala>
		<button type="button" class="btn btn-primary" v-on:click="executeStatment()">execute</button>
	</div>
</template>

<script>
	import FroalaEditor from 'froala-editor'

	FroalaEditor.DefineIcon('projection', {
		NAME: 'π',
		template: 'text'
	});
	FroalaEditor.RegisterCommand('projection', {
		title: 'projection',
		focus: false,
		undo: false,
		refreshAfterCallback: false,
		callback: function() {
			this.html.insert('π');
		}
	});

	FroalaEditor.DefineIcon('rename', {
		NAME: 'ρ',
		template: 'text'
	});
	FroalaEditor.RegisterCommand('rename ', {
		title: 'rename',
		focus: false,
		undo: false,
		refreshAfterCallback: false,
		callback: function() {
			this.html.insert('ρ');
		}
	});

	FroalaEditor.DefineIcon('selection', {
		NAME: 'σ',
		template: 'text'
	});
	FroalaEditor.RegisterCommand('selection', {
		title: 'selection',
		focus: false,
		undo: false,
		refreshAfterCallback: false,
		callback: function() {
			this.html.insert('σ');
		}
	});

	FroalaEditor.DefineIcon('intersect', {
		NAME: '∩',
		template: 'text'
	});
	FroalaEditor.RegisterCommand('intersect', {
		title: 'intersect',
		focus: false,
		undo: false,
		refreshAfterCallback: false,
		callback: function() {
			this.html.insert('∩');
		}
	});

	FroalaEditor.DefineIcon('union', {
		NAME: '∪',
		template: 'text'
	});
	FroalaEditor.RegisterCommand('union', {
		title: 'union',
		focus: false,
		undo: false,
		refreshAfterCallback: false,
		callback: function() {
			this.html.insert('∪');
		}
	});

	FroalaEditor.DefineIcon('subtraction', {
		NAME: '-',
		template: 'text'
	});
	FroalaEditor.RegisterCommand('subtraction', {
		title: 'subtraction',
		focus: false,
		undo: false,
		refreshAfterCallback: false,
		callback: function() {
			this.html.insert('-');
		}
	});

	FroalaEditor.DefineIcon('cross join', {
		NAME: '⨯',
		template: 'text'
	});
	FroalaEditor.RegisterCommand('cross join', {
		title: 'cross join',
		focus: false,
		undo: false,
		refreshAfterCallback: false,
		callback: function() {
			this.html.insert('⨯');
		}
	});
	
	FroalaEditor.DefineIcon('natural join', {
		NAME: '⨝',
		template: 'text'
	});
	FroalaEditor.RegisterCommand('natural join', {
		title: 'natural join',
		focus: false,
		undo: false,
		refreshAfterCallback: false,
		callback: function() {
			this.html.insert('⨝');
		}
	});
	
	FroalaEditor.DefineIcon('group by', {
		NAME: 'γ',
		template: 'text'
	});
	FroalaEditor.RegisterCommand('group by', {
		title: 'group by',
		focus: false,
		undo: false,
		refreshAfterCallback: false,
		callback: function() {
			this.html.insert('γ');
		}
	});
	
	FroalaEditor.DefineIcon('as', {
		NAME: '→',
		template: 'text'
	});
	FroalaEditor.RegisterCommand('as', {
		title: 'as',
		focus: false,
		undo: false,
		refreshAfterCallback: false,
		callback: function() {
			this.html.insert('→');
		}
	});

	export default {
		name: 'Editor',
		data() {
			return {
				config: {
					events: {
						initialized: function() {
							console.log('froala editor initialized')
						},
					},
					charCounterCount: false,
					quickInsertEnabled: false,
					attribution: false,
					placeholderText: 'Edit RA Statement Here!',
					toolbarButtons: [
						['projection', 'selection', 'intersect', 'union', 'subtraction', 'cross join', 'natural join','group by','as']
					]
				},
				userInput: ''
			}
		},
		methods: {
			executeStatment() {
				console.log(this.userInput);
				this.axiosInstance.put('raQuery', {
				  query:this.userInput
				  })
				  .then((response) => {
				    console.log(response.data);
					this.$store.commit('raQuery',response.data.model);
				  })
				  .catch((error) => {
				    console.log(error);
				  });
			},


		}
	}
</script>
