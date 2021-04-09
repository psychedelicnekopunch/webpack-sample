<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>webpack sample</title>
		<script type="text/javascript" src="/js/bundle.js?<?php echo time(); ?>"></script>
		<link rel="stylesheet" href="/css/bundle.css?<?php echo time(); ?>">
	</head>
	<body>
		<h1>webpack sample</h1>
		<script type="text/javascript">
			console.log(window)
			console.log(window.sample.getUnix())
		</script>
	</body>
</html>
