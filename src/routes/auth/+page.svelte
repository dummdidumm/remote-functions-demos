<script>
	import { authenticate } from './auth.remote';
</script>

<form {...authenticate}>
	<input name="phrase" />
	<button>Enter</button>
</form>
