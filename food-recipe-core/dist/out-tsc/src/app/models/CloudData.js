var CloudDataModel = /** @class */ (function () {
    function CloudDataModel(data) {
        this.text = data.name;
        //this.weight = this.calculateWeight(data);
    }
    //weight: string;
    CloudDataModel.prototype.calculateWeight = function (data) {
        //RÄKNA UT HUR MÅNGA AV EN SORT OSV.. MEN DET KANSKE MÅSTE GÖRAS NÅN ANNANSTANS INNAN MAN KOMMER HIT!
        return "";
    };
    return CloudDataModel;
}());
export { CloudDataModel };
export default CloudDataModel;
//# sourceMappingURL=CloudData.js.map