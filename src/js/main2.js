if (typeof language !=="undefined"){
} else {
	language = 'ru';
}

langs = {
	'en': {
		'ajax_error': 'An error occurred while executing Ajax request'
	},
	'ru': {
		'ajax_error': 'Возникла ошибка при выполнении Ajax-запроса'
	}		
}

function getNameFileUpload (str){ if (str.lastIndexOf('\\')){ var i = str.lastIndexOf('\\')+1; } else{ var i = str.lastIndexOf('/')+1; } var filename = str.slice(i); 	var uploaded = document.getElementById("fileformlabel"); uploaded.innerHTML = filename; }

function change_url(reload){
	var url = '';
	$('.url-control').each(function(i){
		if($(this).val() != ''){
			url += '&' + $(this).attr('name') + '=' + $(this).val();
		}
	});
	url = '?'+url.substring(1, url.length);
	window.history.pushState('backler', 'title' , url);
	
	if(reload) location.reload();
}

// Get-params from URL
function getUrl(param){
	url = window.location.href;
	gets = url.substr(url.indexOf('?')+1);
	if(url != gets){
		gets = gets.split('&');
		var getParams = new Array();
		for(var i in gets) {
		    var arr = gets[i].split('=');
		    getParams[arr[0]] = arr[1];
		}
		if(!param){
			return getParams;
		} else {
			return getParams[param];
		}
	} else {
		return '';
	}
}

$(function () {
	$('body').on('submit', 'form.ajaxForm', function () {
		var 
		form = $(this),
		submit = form.find("[type=submit]"),
		output = form.find('.output'),
		alerts = form.find('.alert');
		upload = form.prev('.ajaxFormUpload');
		uploadResult = form.prev('.ajaxFormUpload').prev('iframe');		
		if (output.length == 0)
		{
			form.append('<div class="output"></div>');
			output = form.find('.output');
		}
		submit_ready = '...';
		submit_error = 'ERROR';		
		submit_text = submit.text();		
		submit.attr('disabled','disabled').addClass('disabled').text('Waiting...');
		
		if (form.find('input[form=ajaxFormUpload]').length || form.find('input.ajaxFormUpload').length)
		{
			form.find('.file-temp').remove();
			inputs = form.find('input[type=file]').clone().addClass('file-temp');
			upload.append(inputs);			
			upload.trigger('submit');
			form.prev('#ajaxFormUpload').find('input[type=file]').remove();
			form.append(inputs);						
			uploadResult.off('load');
			uploadResult.on('load', function () {

				cont = JSON.parse($(this).contents().text().match(/\{.*\}$/)[0]);
				if(cont['errors'] != null){
					output.empty();
					for (var i in cont['errors'])
					{
						output.append('<div class="alert alert-danger">'+cont.errors[i]+'</div>');					
					}										
					setTimeout(function(){
						submit.text(submit_text);
						submit.removeAttr('disabled').removeClass('disabled');							
					}, 1000);						
				} else {
					var files = cont['files'];
					var filesCnt = files.length;
					for (var i = 0; i < filesCnt; i++)
					{
						form.append('<input type="hidden" class="temp" name="' + files[i]['name'] + '" value="' + files[i]['value'] + '" />');
					}
					
					var data = form.serializeArray();
					
					$.ajax({
						"url": form.attr("action"),
						"type": form.attr("method"),
						"data": data,
						"dataType": "json",
						"complete": function () {
							
						},
						"error": function (jqXHR, error, errorThrown) {
							output.empty();
							submit.text(submit_error);						
							setTimeout(function(){
								submit.text(submit_text);
								submit.removeAttr('disabled').removeClass('disabled');							
							}, 1000);
	//						output.append('<div class="alert alert-danger">'+error+'</div>');
							output.append('<div class="alert alert-danger">'+langs[language]['ajax_error']+'</div>');
						},
						"success": function (data) {
							output.empty();
							submit.text(submit_ready);						
							setTimeout(function(){
								submit.text(submit_text);
								submit.removeAttr('disabled').removeClass('disabled');							
							}, 1000);						
							if (typeof(data.success) != 'undefined')
							{
								output.append('<div class="alert alert-success">'+data.success.message+'</div>');
								if (typeof(data.success.timeout) != 'undefined')
								{
									setTimeout(function () {
										if (typeof(data.success.redirect) != 'undefined')
										{
											window.location = data.success.redirect;
										}
										if (typeof(data.success.trigger) != 'undefined')
										{
											form.trigger(data.success.trigger);
										}
										if (typeof(data.success.refresh) != 'undefined')
										{
											window.location = window.location;
										}
									}, data.success.timeout);
								}
							}
							else if (typeof(data.result) != 'undefined')
							{
								if(data.result.place){
									$(data.result.place).append(data.result.html);
								} else {
									output.append('<div class="result_html">'+data.result.html+'</div>');								
								}							
							}						
							else if (typeof(data.error) != 'undefined')
							{
								for (var i in data.error)
								{
									output.append('<div class="alert alert-danger">'+data.error[i].message+'</div>');
								}
							}
							
						}
					});										
				}
			});
		}
		else
		{
			var data = form.serializeArray();
				
			$.ajax({
				"url": form.attr("action"),
				"type": form.attr("method"),
				"data": data,
				"dataType": "json",
				"complete": function () {
					form.find('.temp').remove();
				},
				"error": function (jqXHR, error, errorThrown) {
					output.empty();
					submit.text(submit_error);
						setTimeout(function(){
							submit.text(submit_text);
							submit.removeAttr('disabled').removeClass('disabled');							
						}, 1000);										
//					output.append('<div class="alert alert-danger">'+error+'</div>');
					output.append('<div class="alert alert-danger">'+langs[language]['ajax_error']+'</div>');
				},
				"success": function (data) {
					output.empty();
					submit.text(submit_ready);
					setTimeout(function(){
						submit.text(submit_text);
						submit.removeAttr('disabled').removeClass('disabled');							
					}, 1000);										
					if (typeof(data.success) != 'undefined')
					{
						output.append('<div class="alert alert-success">'+data.success.message+'</div>');
						if (typeof(data.success.timeout) != 'undefined')
						{
							setTimeout(function () {
								if (typeof(data.success.redirect) != 'undefined')
								{
									window.location = data.success.redirect;
								}
								if (typeof(data.success.trigger) != 'undefined')
								{
									form.trigger(data.success.trigger);
								}
								if (typeof(data.success.refresh) != 'undefined')
								{
									// window.location = window.location;
									location.reload();									
								}
							}, data.success.timeout);
						}
					}
					else if (typeof(data.result) != 'undefined')
					{
						if(data.result.place){
							$(data.result.place).append(data.result.html);							
						} else {
							output.append('<div class="result_html">'+data.result.html+'</div>');
						}
					}						
					else if (typeof(data.error) != 'undefined')
					{
						for (var i in data.error)
						{
							output.append('<div class="alert alert-danger">'+data.error[i].message+'</div>');
						}
					}
				}
			});
		}
		
		return false;
	});
	
	if (typeof($.fn.dataTable) != 'undefined')
	{
		$.extend( $.fn.dataTable.defaults, {
			"oLanguage": {
				"sProcessing":   "Подождите...",
				"sLengthMenu":   "_MENU_ записей на странице",
				"sZeroRecords":  "Записи отсутствуют.",
				"sInfo":         "Записи с _START_ до _END_ из _TOTAL_ записей",
				"sInfoEmpty":    "Записи с 0 до 0 из 0 записей",
				"sInfoFiltered": "(отфильтровано из _MAX_ записей)",
				"sInfoPostFix":  " ",
				"sInfoThousands": "",
				"sSearch":       "Поиск:",
				"sUrl":          "",
				"oPaginate": {
						"sFirst": "Первая",
						"sPrevious": "Предыдущая",
						"sNext": "Следующая",
						"sLast": "Последняя"
				},
				"oAria": {
						"sSortAscending":  ": активировать для сортировки столбца по возрастанию",
						"sSortDescending": ": активировать для сортировки столбцов по убыванию"
				}
			},
			"bAutoWidth": false,
			"sPaginationType": "full_numbers"
		});
	}
});