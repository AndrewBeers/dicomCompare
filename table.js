function productsTable( element ) {
  this.element = element;
  this.table = this.element.children('.cd-products-table');
  this.productsWrapper = this.table.children('.cd-products-wrapper');
  this.tableColumns = this.productsWrapper.children('.cd-products-columns');
  this.products = this.tableColumns.children('.product');
  //additional properties here
  // bind table events
  this.bindEvents();
}
 
var comparisonTables = [];
$('.cd-products-comparison-table').each(function(){
  //create a productsTable object for each .cd-products-comparison-table
  comparisonTables.push(new productsTable($(this)));
});

productsTable.prototype.updateLeftScrolling = function() {
    var scrollLeft = this.productsWrapper.scrollLeft();
 
    if( this.table.hasClass('top-fixed') && checkMQ() == 'desktop') setTranformX(this.productsTopInfo, '-'+scrollLeft);
}