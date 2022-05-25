var table = $('#table')
$('#add').on('click', function(){
    var randomId = 100 + ~~(Math.random() * 100)
    table.bootstrapTable('insertRow', {
        index: 0,
        row: {
            id: randomId,
            name: 'Name ' + randomId,

        }
    })
})

$('#remove').on('click', function(){
    var ids = $.map(table.bootstrapTable('getSelections'), function(row){
        return row.id
    })
    table.bootstrapTable('remove', {
        field: 'id',
        values: ids
    })
})