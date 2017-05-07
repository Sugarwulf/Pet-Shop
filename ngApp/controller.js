var petShopApp;
(function (petShopApp) {
    var PetListController = (function () {
        function PetListController() {
            this.dogs = [
                { id: 1, name: 'Muttweather', image: "http://s5.tinypic.com/98rq7t_th.jpg" },
                { id: 2, name: 'Felony', image: "http://s5.tinypic.com/2uz2i2w_th.jpg" },
                { id: 3, name: 'Zangief', image: "http://s5.tinypic.com/etf9uc_th.jpg" }
            ];
            this.bunnies = [
                { id: 1, name: 'Thumper', image: "http://s5.tinypic.com/2nrhq8o_th.jpg" },
                { id: 2, name: 'Ohare', image: "http://s5.tinypic.com/fkmkgm_th.jpg" },
                { id: 3, name: 'FoodChain', image: "http://s5.tinypic.com/14c5gzb_th.jpg" }
            ];
        }
        return PetListController;
    }());
    angular.module("petShopApp").controller("PetListController", PetListController);
})(petShopApp || (petShopApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxVQUFVLENBeUJuQjtBQXpCRCxXQUFVLFVBQVU7SUFFcEI7UUFJRTtZQUNFLElBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQ1YsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBQyxhQUFhLEVBQUUsS0FBSyxFQUFDLHFDQUFxQyxFQUFDO2dCQUN2RSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsc0NBQXNDLEVBQUM7Z0JBQ25FLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxxQ0FBcUMsRUFBQzthQUNwRSxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRztnQkFDYixFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsc0NBQXNDLEVBQUM7Z0JBQ3BFLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxxQ0FBcUMsRUFBQztnQkFDakUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBQyxXQUFXLEVBQUUsS0FBSyxFQUFDLHNDQUFzQyxFQUFDO2FBQ3ZFLENBQUM7UUFDSixDQUFDO1FBRUgsd0JBQUM7SUFBRCxDQUFDLEFBakJELElBaUJDO0lBSUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUVoRixDQUFDLEVBekJTLFVBQVUsS0FBVixVQUFVLFFBeUJuQiIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBwZXRTaG9wQXBwIHtcblxuY2xhc3MgUGV0TGlzdENvbnRyb2xsZXIge1xuICBwdWJsaWMgZG9ncztcbiAgcHVibGljIGJ1bm5pZXM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb2dzID0gW1xuICAgICAge2lkOjEsIG5hbWU6J011dHR3ZWF0aGVyJywgaW1hZ2U6XCJodHRwOi8vczUudGlueXBpYy5jb20vOThycTd0X3RoLmpwZ1wifSxcbiAgICAgIHtpZDoyLCBuYW1lOidGZWxvbnknLCBpbWFnZTpcImh0dHA6Ly9zNS50aW55cGljLmNvbS8ydXoyaTJ3X3RoLmpwZ1wifSxcbiAgICAgIHtpZDozLCBuYW1lOidaYW5naWVmJywgaW1hZ2U6XCJodHRwOi8vczUudGlueXBpYy5jb20vZXRmOXVjX3RoLmpwZ1wifVxuICAgIF07XG4gICAgdGhpcy5idW5uaWVzID0gW1xuICAgICAge2lkOjEsIG5hbWU6J1RodW1wZXInLCBpbWFnZTpcImh0dHA6Ly9zNS50aW55cGljLmNvbS8ybnJocThvX3RoLmpwZ1wifSxcbiAgICAgIHtpZDoyLCBuYW1lOidPaGFyZScsIGltYWdlOlwiaHR0cDovL3M1LnRpbnlwaWMuY29tL2ZrbWtnbV90aC5qcGdcIn0sXG4gICAgICB7aWQ6MywgbmFtZTonRm9vZENoYWluJywgaW1hZ2U6XCJodHRwOi8vczUudGlueXBpYy5jb20vMTRjNWd6Yl90aC5qcGdcIn1cbiAgICBdO1xuICB9XG5cbn1cblxuXG5cbmFuZ3VsYXIubW9kdWxlKFwicGV0U2hvcEFwcFwiKS5jb250cm9sbGVyKFwiUGV0TGlzdENvbnRyb2xsZXJcIiwgUGV0TGlzdENvbnRyb2xsZXIpO1xuXG59XG4iXX0=