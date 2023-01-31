sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, formatter) {
        "use strict";

        return Controller.extend("jsonbinding.controller.JSONBinding", {

            formatter: formatter,

            onInit: function () {
                var oAddressModel = new JSONModel();
                var oAddress = {"EID" : "reynald.d.diana",
                                "Enabled" : true,
                                "Address" : {
                                    "Street" : "Street St.",
                                    "City"   : "City city",
                                    "Zip"    : "1400",
                                    "Country" : "Philippines"
                                },
                                "SalesAmount" : 100,
                                "CurrencyCode" : "USD"

                };
                
                //Set Data to Model
                oAddressModel.setData(oAddress);

                // Get Current View
                var oView = this.getView();

                // Set Model to View          //model name
                oView.setModel(oAddressModel, "oAddressModel");

            },

            onSelectProduct: function(oEvent){
                //get control list
                var oList = oEvent.getSource();

                //get selected item
                var oSelItem = oList.getSelectedItem();

                var oBindingContext = oSelItem.getBindingContext("ProductsModel");

                //get the context binding path
                // var sSelItemPath = oSelItem.getBindingContextPath();
                var sSelItemPath = oBindingContext.getPath();

                var oPanel = this.byId("Panel4");

                oPanel.bindElement(
                    {
                        path: sSelItemPath,
                        model: "ProductsModel"
                    }
                )


            }
        });
    });
