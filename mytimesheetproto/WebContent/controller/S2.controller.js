jQuery.sap.require("mytimesheetproto.util.Formatter");
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("mytimesheetproto.controller.S2", {
		onInit: function() {
			for (var i = 1; i <= 24; i++){
				//Set Name
				if (i === 8 || i === 24) {
					this.byId("id_calendar1").addCalendarEvent(
						new sap.me.OverlapCalendarEvent({
							startDay: "1970-01-01",
							endDay: "1970-01-01",
							row: i,
							type: "06",
							name: i + ":00"
						})
				); }
				else if (i === 1) {
					this.byId("id_calendar1").addCalendarEvent(
						new sap.me.OverlapCalendarEvent({
							startDay: "1970-01-01",
							endDay: "1970-01-01",
							row: i,
							type: "06",
							name: "0:00"
						})
					);
				}
				else if (i === 17) {
					this.byId("id_calendar1").addCalendarEvent(
						new sap.me.OverlapCalendarEvent({
							startDay: "1970-01-01",
							endDay: "1970-01-01",
							row: i,
							type: "06",
							name: "17:30"
						})
					);
				}
				else {
					this.byId("id_calendar1").addCalendarEvent(
						new sap.me.OverlapCalendarEvent({
							startDay: "1970-01-01",
							endDay: "1970-01-01",
							row: i,
							type: "06",
							name: "|"
						})
					);
				}
				
				//Set Data
				if (i < 8) {
					this.byId("id_calendar1").addCalendarEvent(
						new sap.me.OverlapCalendarEvent({
							startDay: "2016-06-03",
							endDay: "2016-06-03",
							row: i,
							type: "01"
						})
				); }
				
				if (i >= 8 && i<=18) {
					this.byId("id_calendar1").addCalendarEvent(
						new sap.me.OverlapCalendarEvent({
							startDay: "2016-06-03",
							endDay: "2016-06-03",
							row: i,
							type: "06"
						})
				); }
				
				if (i > 18) {
					this.byId("id_calendar1").addCalendarEvent(
						new sap.me.OverlapCalendarEvent({
							startDay: "2016-06-03",
							endDay: "2016-06-03",
							row: i,
							type: "07"
						})
				); }

				if (i>=8 && i<= 20) {
					this.byId("id_calendar1").addCalendarEvent(
						new sap.me.OverlapCalendarEvent({
							startDay: "2016-06-07",
							endDay: "2016-06-07",
							row: i,
							type: "02"
						})
				); }

				if (i>=0 && i<= 24) {
					this.byId("id_calendar1").addCalendarEvent(
						new sap.me.OverlapCalendarEvent({
							startDay: "2016-06-08",
							endDay: "2016-06-08",
							row: i,
							type: "01"
						})
				); }

				if (i>=8 && i<= 17) {
					this.byId("id_calendar1").addCalendarEvent(
						new sap.me.OverlapCalendarEvent({
							startDay: "2016-06-11",
							endDay: "2016-06-12",
							row: i,
							type: "07"
						})
				); }

				if (i>=16 && i<= 22) {
					this.byId("id_calendar1").addCalendarEvent(
						new sap.me.OverlapCalendarEvent({
							startDay: "2016-06-15",
							endDay: "2016-06-15",
							row: i,
							type: "01"
						})
				); }


				if (i>=26 && i<= 36) {
					this.byId("id_calendar1").addCalendarEvent(
						new sap.me.OverlapCalendarEvent({
							startDay: "2016-06-15",
							endDay: "2016-06-15",
							row: i,
							type: "01"
						})
				); }


				if (i>=8 && i<= 17) {
					this.byId("id_calendar1").addCalendarEvent(
						new sap.me.OverlapCalendarEvent({
							startDay: "2016-06-18",
							endDay: "2016-06-20",
							row: i,
							type: "01"
						})
				); }
			}
			
			this.byId("id_calendar1").addEventDelegate({
				onAfterRendering: function() {
					//$("#" + that._tcObject.pernrCalendar.getId()).children(":first-child").hide();
					var OpernrCalendar = $(".calendarVContainer").children();
					$(OpernrCalendar).each(function(index, element) {
						$(element).find(".sapMeOverlapCalendarRow").attr("section", index);
					});
					var days = $(".sapMeOverlapCalendarDay");
					days.each(function(index,ele){
						var targetSplits = ele.id.split("-");
						var row = targetSplits[targetSplits.length - 2];
						var column = targetSplits[targetSplits.length - 1];
						
						if (row == 4 && column == 5){
							ele.appendChild(document.createTextNode("0:00~6:00"));
						}
						
					});
					} });

			this.byId("btn_1").addStyleClass("hideFooterButton");
			this.byId("btn_2").addStyleClass("hideFooterButton");
			this.byId("btn_3").addStyleClass("hideFooterButton");
		},
		
		searchEmployee: function (oEvent) {
		    if (! this._oDialog) {
		        this._oDialog = sap.ui.xmlfragment("mytimesheetproto.view.Search", this);
		        this._oDialog.setModel(this.getView().getModel("i18n"), "i18n");
		      }
		    
		    this._oDialog.open();
		}

	});

});