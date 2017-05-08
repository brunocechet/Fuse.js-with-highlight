var Fuse = require('fuse.js');

var list = [{"id":74,"name":"mídia","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-09-11T09:24:37.658-03:00"},{"id":18,"name":"F5","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-03-12T17:26:21.932-03:00"},{"id":84,"name":"Grupo Facebook","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-10-26T15:36:47.694-02:00"},{"id":78,"name":"TUD","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-09-21T14:06:13.031-03:00"},{"id":69,"name":"prodto","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-09-01T09:22:44.456-03:00"},{"id":40,"name":"Ampla Mkt","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-06-03T16:14:01.659-03:00"},{"id":41,"name":"Compartilhamento","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-06-08T14:30:58.479-03:00"},{"id":72,"name":"proiiohooihfn","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-09-03T16:46:09.397-03:00"},{"id":10,"name":"Conteúdo externo","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-03-12T16:39:32.042-03:00"},{"id":50,"name":"Vagas","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-06-19T13:47:43.637-03:00"},{"id":60,"name":"#SeekrIBMSummit","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-07-29T19:52:24.808-03:00"},{"id":67,"name":"Monitoramento Protesto","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-08-19T09:50:37.919-03:00"},{"id":68,"name":"Digitalks","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-08-26T15:34:11.654-03:00"},{"id":75,"name":"MasterChef","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-09-16T15:03:55.708-03:00"},{"id":43,"name":"Evento","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-06-08T15:26:10.593-03:00"},{"id":76,"name":"E-book","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-09-16T15:11:46.605-03:00"},{"id":80,"name":"Curso Mídias Sociais","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-09-30T10:16:20.397-03:00"},{"id":81,"name":"Indicação","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-09-30T10:16:38.952-03:00"},{"id":6,"name":"Vaga","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-03-12T16:33:53.967-03:00"},{"id":90,"name":"Blog Seekr","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-11-18T16:37:20.899-02:00"},{"id":92,"name":"Coca-cola clothes","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-11-19T15:36:17.300-02:00"},{"id":11,"name":"Insta Seekr","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-03-12T17:04:40.224-03:00"},{"id":94,"name":"teste3","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-12-09T16:15:59.469-02:00"},{"id":95,"name":"reclamação produto","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-12-21T15:37:56.723-02:00"},{"id":96,"name":"inbox","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2016-01-28T10:51:58.057-02:00"},{"id":99,"name":"seekrmonitor","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2016-02-03T17:51:21.969-02:00"},{"id":115,"name":"Colaborador","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2016-07-30T10:26:25.718-03:00"},{"id":77,"name":"Apresentação Seekr 5","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-09-18T10:41:13.884-03:00"},{"id":112,"name":"NOVA","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2016-07-18T12:45:05.530-03:00"},{"id":117,"name":"duvida produto","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2016-09-27T14:22:11.920-03:00"},{"id":118,"name":"raclamação atedimento","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2016-09-27T14:22:11.603-03:00"},{"id":113,"name":"Publicação própia","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2016-07-18T22:27:45.437-03:00"},{"id":114,"name":"menção a marca","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2016-07-26T10:56:12.936-03:00"},{"id":57,"name":"Freemium","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-07-24T08:58:20.002-03:00"},{"id":46,"name":"Página de Ocorrências","active":true,"color":"#0868AC","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-06-16T17:52:55.137-03:00"},{"id":119,"name":"orçamento","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2017-01-18T14:50:54.745-02:00"},{"id":83,"name":"Reclamação","active":true,"color":"#e02f2f","parentId":null,"nodeLevel":0,"hasChildren":true,"remove":false,"projectId":20701,"createdAt":"2015-10-07T14:45:01.481-03:00"},{"id":45,"name":"Monitor","active":true,"color":"#0868AC","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-06-16T17:52:37.709-03:00"},{"id":116,"name":"teste","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":true,"remove":false,"projectId":20701,"createdAt":"2016-08-16T20:36:47.385-03:00"},{"id":22,"name":"OpSocial","active":true,"color":"#0868AC","parentId":null,"nodeLevel":0,"hasChildren":true,"remove":false,"projectId":20701,"createdAt":"2015-05-05T15:46:09.831-03:00"},{"id":1,"name":"Checkin","active":true,"color":"#0868AC","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-03-12T15:43:56.569-03:00"},{"id":123,"name":"fsdfsdf","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2017-02-20T16:26:37.893-03:00"},{"id":52,"name":"Sinistro","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-06-24T17:16:04.912-03:00"},{"id":9,"name":"Conteúdo interno","active":true,"color":"","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-03-12T16:38:01.177-03:00"},{"id":16,"name":"Social Media Week","active":true,"color":"#2d2d2d","parentId":null,"nodeLevel":0,"hasChildren":false,"remove":true,"projectId":20701,"createdAt":"2015-03-12T17:17:51.465-03:00"}];

var options = {
  shouldSort: true,
  includeMatches: true,
  threshold: 0.4,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "name"
  ]
};
var fuse = new Fuse(list, options); // "list" is the item array
var result = fuse.search("a");

var highlighter = function(resultItem){
  resultItem.matches.forEach((matchItem) => {
    var text = resultItem.item[matchItem.key];
    var result = []
    var matches = [].concat(matchItem.indices); // limpar referencia
    var pair = matches.shift()
    
    for (var i = 0; i < text.length; i++) {
      var char = text.charAt(i)
      if (pair && i == pair[0]) {
        result.push('<b>')
      }
      result.push(char)
      if (pair && i == pair[1]) {
        result.push('</b>')
        pair = matches.shift()
      }
    }
    resultItem.highlight = result.join('');

    if(resultItem.children && resultItem.children.length > 0){
      resultItem.children.forEach((child) => {
        highlighter(child);
      });
    }
  });
};

result.forEach((resultItem) => {
  highlighter(resultItem);
});

console.log(JSON.stringify(result, null, '  '));
