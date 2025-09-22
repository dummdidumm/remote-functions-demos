<script>
	import { secretText, secretText2, secretText3 } from '../auth.remote';
</script>

<p>{await secretText()}</p>
<p>{await secretText2()}</p>
<p>{await secretText3()}</p>
