<?php include 'components/header.php'; ?>

	<section class="topo-interna">
		<div class="borda1"></div>
		<div class="container">
			<h1>Contato</h1>
			<ol class="breadcrumb pull-right">
				<li><a href="">Home</a></li>
				<li class="active">Contato</li>
			</ol>
		</div><!-- container -->
		<div class="borda2"></div>
	</section><!-- topo-interna -->
	
	<section class="interna contato">
		<div class="container">
			<form action="">
				<div class="form-group">
					<label for="">Nome</label>
					<input type="text" class="form-control">
				</div><!-- form-group -->
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<div class="form-group">
							<label for="">E-mail</label>
							<input type="email" class="form-control">
						</div><!-- form-group -->
					</div><!-- md-6 -->
					<div class="col-md-6 col-sm-6">
						<div class="form-group">
							<label for="">Telefone</label>
							<input type="text" class="form-control">
						</div><!-- form-group -->
					</div><!-- md-6 -->
				</div><!-- row -->
				<div class="form-group">
					<label for="">Mensagem</label>
					<textarea class="form-control"></textarea>
				</div><!-- form-group -->
				<button>Enviar</button>
			</form>
		</div><!-- container -->
	</section><!-- interna -->
	
<?php include 'components/footer.php'; ?>