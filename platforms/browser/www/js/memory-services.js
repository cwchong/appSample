'use strict';

(function () {

    var registrants = [
            {"ID":"1","ClassName":"Registration","LastEdited":"2017-04-15 16:53:27","Created":"2017-04-15 16:53:27","Type":"Individual","GroupID":"0","GivenName":"backend entry","Surname":"-","ICFIN":"123","Email":"-","Mobile":"85184082","TicketID":"-","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"7"},{"ID":"2","ClassName":"Registration","LastEdited":"2017-04-15 17:56:32","Created":"2017-04-15 17:56:32","Type":"Individual","GroupID":"0","GivenName":"test1","Surname":"test1","ICFIN":"test1","Email":"test1","Mobile":"9999","TicketID":"99999","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"5"},{"ID":"3","ClassName":"Registration","LastEdited":"2017-04-15 17:56:32","Created":"2017-04-15 17:56:32","Type":"Individual","GroupID":"0","GivenName":"test1","Surname":"test1","ICFIN":"test1","Email":"test1","Mobile":"9999","TicketID":"99999","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"1"},{"ID":"4","ClassName":"Registration","LastEdited":"2017-04-15 23:12:17","Created":"2017-04-15 23:12:17","Type":"Group","GroupID":"4","GivenName":"grouptest","Surname":"grouptest","ICFIN":"aaaa","Email":"test","Mobile":"test","TicketID":"test","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"7"},{"ID":"5","ClassName":"Registration","LastEdited":"2017-04-15 23:12:17","Created":"2017-04-15 23:12:17","Type":"Group","GroupID":"4","GivenName":"111","Surname":null,"ICFIN":"111a","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"7"},{"ID":"6","ClassName":"Registration","LastEdited":"2017-04-15 23:12:17","Created":"2017-04-15 23:12:17","Type":"Group","GroupID":"4","GivenName":"222","Surname":null,"ICFIN":"222a","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"7"},{"ID":"7","ClassName":"Registration","LastEdited":"2017-04-15 23:12:17","Created":"2017-04-15 23:12:17","Type":"Group","GroupID":"4","GivenName":"333","Surname":null,"ICFIN":"333a","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"7"},{"ID":"8","ClassName":"Registration","LastEdited":"2017-04-15 23:12:17","Created":"2017-04-15 23:12:17","Type":"Group","GroupID":"4","GivenName":"444","Surname":null,"ICFIN":"444a","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"7"},{"ID":"9","ClassName":"Registration","LastEdited":"2017-04-15 23:12:17","Created":"2017-04-15 23:12:17","Type":"Group","GroupID":"4","GivenName":"555","Surname":null,"ICFIN":"555a","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"7"},{"ID":"10","ClassName":"Registration","LastEdited":"2017-04-15 23:12:17","Created":"2017-04-15 23:12:17","Type":"Group","GroupID":"10","GivenName":"grouptest","Surname":"grouptest","ICFIN":"aaaa","Email":"test","Mobile":"test","TicketID":"test","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"1"},{"ID":"11","ClassName":"Registration","LastEdited":"2017-04-15 23:12:17","Created":"2017-04-15 23:12:17","Type":"Group","GroupID":"10","GivenName":"111","Surname":null,"ICFIN":"111a","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"1"},{"ID":"12","ClassName":"Registration","LastEdited":"2017-04-15 23:12:17","Created":"2017-04-15 23:12:17","Type":"Group","GroupID":"10","GivenName":"222","Surname":null,"ICFIN":"222a","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"1"},{"ID":"13","ClassName":"Registration","LastEdited":"2017-04-15 23:12:17","Created":"2017-04-15 23:12:17","Type":"Group","GroupID":"10","GivenName":"333","Surname":null,"ICFIN":"333a","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"1"},{"ID":"14","ClassName":"Registration","LastEdited":"2017-04-15 23:12:17","Created":"2017-04-15 23:12:17","Type":"Group","GroupID":"10","GivenName":"444","Surname":null,"ICFIN":"444a","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"1"},{"ID":"15","ClassName":"Registration","LastEdited":"2017-04-15 23:12:17","Created":"2017-04-15 23:12:17","Type":"Group","GroupID":"10","GivenName":"555","Surname":null,"ICFIN":"555a","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"1"},{"ID":"16","ClassName":"Registration","LastEdited":"2017-04-16 12:27:07","Created":"2017-04-16 12:27:07","Type":"Individual","GroupID":"0","GivenName":"test2","Surname":"test","ICFIN":"test","Email":"test","Mobile":"test","TicketID":"test","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"8"},{"ID":"17","ClassName":"Registration","LastEdited":"2017-04-18 01:16:52","Created":"2017-04-18 01:16:52","Type":"Individual","GroupID":"0","GivenName":"CW","Surname":"C","ICFIN":"SSSSSS","Email":"moving.chong@gmail.com","Mobile":"9999","TicketID":"1123123","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"5"},{"ID":"18","ClassName":"Registration","LastEdited":"2017-04-18 13:57:40","Created":"2017-04-18 13:57:40","Type":"Individual","GroupID":"0","GivenName":"test1111","Surname":"test","ICFIN":"test2","Email":"moving.chong@gmail.com","Mobile":"test","TicketID":"test","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"2"},{"ID":"19","ClassName":"Registration","LastEdited":"2017-04-18 23:00:18","Created":"2017-04-18 23:00:18","Type":"Group","GroupID":"19","GivenName":"aaa","Surname":"aaa","ICFIN":"test2","Email":"moving.chong@gmail.com","Mobile":"9191919","TicketID":"9191911","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"3"},{"ID":"20","ClassName":"Registration","LastEdited":"2017-04-18 23:00:18","Created":"2017-04-18 23:00:18","Type":"Group","GroupID":"19","GivenName":"bbb","Surname":null,"ICFIN":"test1","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"3"},{"ID":"21","ClassName":"Registration","LastEdited":"2017-04-18 23:00:18","Created":"2017-04-18 23:00:18","Type":"Group","GroupID":"19","GivenName":"cccc","Surname":null,"ICFIN":"test3","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"3"},{"ID":"22","ClassName":"Registration","LastEdited":"2017-04-18 23:00:18","Created":"2017-04-18 23:00:18","Type":"Group","GroupID":"22","GivenName":"aaa","Surname":"aaa","ICFIN":"test2","Email":"moving.chong@gmail.com","Mobile":"9191919","TicketID":"9191911","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"4"},{"ID":"23","ClassName":"Registration","LastEdited":"2017-04-18 23:00:18","Created":"2017-04-18 23:00:18","Type":"Group","GroupID":"22","GivenName":"bbb","Surname":null,"ICFIN":"test1","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"4"},{"ID":"24","ClassName":"Registration","LastEdited":"2017-04-18 23:00:18","Created":"2017-04-18 23:00:18","Type":"Group","GroupID":"22","GivenName":"cccc","Surname":null,"ICFIN":"test3","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"4"},{"ID":"25","ClassName":"Registration","LastEdited":"2017-04-18 23:15:15","Created":"2017-04-18 23:15:15","Type":"Group","GroupID":"25","GivenName":"aaaa","Surname":"aaa","ICFIN":"test1","Email":"moving.chong@gmail.com","Mobile":"test","TicketID":"test","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"15"},{"ID":"26","ClassName":"Registration","LastEdited":"2017-04-18 23:15:15","Created":"2017-04-18 23:15:15","Type":"Group","GroupID":"25","GivenName":"aaaaaabbb","Surname":null,"ICFIN":"test2","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"15"},{"ID":"27","ClassName":"Registration","LastEdited":"2017-04-18 23:15:15","Created":"2017-04-18 23:15:15","Type":"Group","GroupID":"27","GivenName":"aaaa","Surname":"aaa","ICFIN":"test1","Email":"moving.chong@gmail.com","Mobile":"test","TicketID":"test","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"7"},{"ID":"28","ClassName":"Registration","LastEdited":"2017-04-18 23:15:15","Created":"2017-04-18 23:15:15","Type":"Group","GroupID":"27","GivenName":"aaaaaabbb","Surname":null,"ICFIN":"test2","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"7"},{"ID":"29","ClassName":"Registration","LastEdited":"2017-04-19 21:28:45","Created":"2017-04-19 21:28:45","Type":"Group","GroupID":"29","GivenName":"aaaa","Surname":"aaaa","ICFIN":"testtst","Email":"moving.chong@gmail.com","Mobile":"123123","TicketID":"12312312","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"2"},{"ID":"30","ClassName":"Registration","LastEdited":"2017-04-19 21:28:45","Created":"2017-04-19 21:28:45","Type":"Group","GroupID":"29","GivenName":"test","Surname":null,"ICFIN":"testtsta","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"2"},{"ID":"31","ClassName":"Registration","LastEdited":"2017-04-19 21:28:45","Created":"2017-04-19 21:28:45","Type":"Group","GroupID":"29","GivenName":"aaaaaa","Surname":null,"ICFIN":"aaaaaaaa","Email":null,"Mobile":null,"TicketID":null,"NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"2"},{"ID":"32","ClassName":"Registration","LastEdited":"2017-04-20 23:24:14","Created":"2017-04-20 23:24:14","Type":"Individual","GroupID":"0","GivenName":"66","Surname":"66","ICFIN":"i6666","Email":"moving.chong@gmail.com","Mobile":"919191","TicketID":"919191","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"2"},{"ID":"33","ClassName":"Registration","LastEdited":"2017-04-20 23:39:52","Created":"2017-04-20 23:39:52","Type":"Individual","GroupID":"0","GivenName":"7777","Surname":"7777","ICFIN":"ic7777","Email":"moving.chong@gmail.com","Mobile":"777","TicketID":"777","NumSeats":"1","OnWaitingList":"0","RegistrationSessionID":"2"}
        ],
        sessions = [
                {"ID":"1","ClassName":"RegistrationSession","LastEdited":"2017-04-16 14:56:58","Created":"2017-04-12 16:33:10","Date":"2017-08-26","TimeStart":"14:00:00","TimeEnd":"16:00:00","Venue":"Victoria Theatre","Quota":"5","RegistrationShowID":"1","RegistrationSessionGroupID":"0","LinkedRegistrationShowID":"1","RRCount":"7"},{"ID":"2","ClassName":"RegistrationSession","LastEdited":"2017-04-16 14:57:02","Created":"2017-04-12 16:33:33","Date":"2017-08-27","TimeStart":"14:00:00","TimeEnd":"16:00:00","Venue":"Victoria Theatre","Quota":"20","RegistrationShowID":"1","RegistrationSessionGroupID":"0","LinkedRegistrationShowID":"1","RRCount":"6"},{"ID":"8","ClassName":"RegistrationSession","LastEdited":"2017-04-16 14:57:10","Created":"2017-04-16 12:26:32","Date":"2017-04-22","TimeStart":"14:25:00","TimeEnd":"16:25:00","Venue":"Victoria Theatre","Quota":"10","RegistrationShowID":"0","RegistrationSessionGroupID":"3","LinkedRegistrationShowID":"1","RRCount":"1"},{"ID":"5","ClassName":"RegistrationSession","LastEdited":"2017-04-16 14:57:22","Created":"2017-04-12 17:51:17","Date":"2017-08-05","TimeStart":"12:00:00","TimeEnd":"14:00:00","Venue":"Aliwal Arts Centre","Quota":"10","RegistrationShowID":"0","RegistrationSessionGroupID":"1","LinkedRegistrationShowID":"2","RRCount":"2"},{"ID":"3","ClassName":"RegistrationSession","LastEdited":"2017-04-16 14:57:24","Created":"2017-04-12 17:50:08","Date":"2017-08-05","TimeStart":"14:00:00","TimeEnd":"16:00:00","Venue":"Aliwal Arts Centre","Quota":"10","RegistrationShowID":"0","RegistrationSessionGroupID":"1","LinkedRegistrationShowID":"2","RRCount":"3"},{"ID":"4","ClassName":"RegistrationSession","LastEdited":"2017-04-16 14:57:27","Created":"2017-04-12 17:50:34","Date":"2017-08-06","TimeStart":"15:00:00","TimeEnd":"17:00:00","Venue":"Aliwal Arts Centre","Quota":"12","RegistrationShowID":"0","RegistrationSessionGroupID":"1","LinkedRegistrationShowID":"2","RRCount":"3"},{"ID":"6","ClassName":"RegistrationSession","LastEdited":"2017-04-16 14:57:30","Created":"2017-04-12 17:57:27","Date":"2017-08-08","TimeStart":"14:00:00","TimeEnd":"16:00:00","Venue":"Victoria Theatre","Quota":"0","RegistrationShowID":"0","RegistrationSessionGroupID":"1","LinkedRegistrationShowID":"2","RRCount":"0"},{"ID":"7","ClassName":"RegistrationSession","LastEdited":"2017-04-16 14:57:41","Created":"2017-04-12 18:04:51","Date":"2017-08-10","TimeStart":"13:00:00","TimeEnd":"15:00:00","Venue":"Victoria Theatre","Quota":"15","RegistrationShowID":"0","RegistrationSessionGroupID":"2","LinkedRegistrationShowID":"2","RRCount":"9"},{"ID":"9","ClassName":"RegistrationSession","LastEdited":"2017-04-17 00:17:31","Created":"2017-04-17 00:17:31","Date":"2017-04-17","TimeStart":"14:00:00","TimeEnd":"14:15:00","Venue":"Aliwal Arts Centre","Quota":"10","RegistrationShowID":"3","RegistrationSessionGroupID":"0","LinkedRegistrationShowID":"3","RRCount":"0"},{"ID":"10","ClassName":"RegistrationSession","LastEdited":"2017-04-17 00:17:48","Created":"2017-04-17 00:17:48","Date":"2017-04-19","TimeStart":"14:00:00","TimeEnd":"15:00:00","Venue":"Aliwal Arts Centre","Quota":"10","RegistrationShowID":"3","RegistrationSessionGroupID":"0","LinkedRegistrationShowID":"3","RRCount":"0"},{"ID":"11","ClassName":"RegistrationSession","LastEdited":"2017-04-17 00:18:51","Created":"2017-04-17 00:18:51","Date":"2017-04-18","TimeStart":"14:20:00","TimeEnd":"15:20:00","Venue":"Victoria Theatre","Quota":"10","RegistrationShowID":"0","RegistrationSessionGroupID":"4","LinkedRegistrationShowID":"4","RRCount":"0"},{"ID":"12","ClassName":"RegistrationSession","LastEdited":"2017-04-17 00:19:06","Created":"2017-04-17 00:19:06","Date":"2017-04-19","TimeStart":"14:20:00","TimeEnd":"15:20:00","Venue":"Victoria Theatre","Quota":"10","RegistrationShowID":"0","RegistrationSessionGroupID":"4","LinkedRegistrationShowID":"4","RRCount":"0"},{"ID":"13","ClassName":"RegistrationSession","LastEdited":"2017-04-17 00:19:37","Created":"2017-04-17 00:19:37","Date":"2017-04-24","TimeStart":"14:20:00","TimeEnd":"15:20:00","Venue":"Victoria Theatre","Quota":"10","RegistrationShowID":"0","RegistrationSessionGroupID":"5","LinkedRegistrationShowID":"4","RRCount":"0"},{"ID":"14","ClassName":"RegistrationSession","LastEdited":"2017-04-18 22:49:00","Created":"2017-04-18 22:49:00","Date":"2017-04-29","TimeStart":"13:50:00","TimeEnd":"14:50:00","Venue":"somewhere","Quota":"10","RegistrationShowID":"0","RegistrationSessionGroupID":"2","LinkedRegistrationShowID":"2","RRCount":"0"},{"ID":"15","ClassName":"RegistrationSession","LastEdited":"2017-04-18 22:56:30","Created":"2017-04-18 22:56:30","Date":"2017-04-21","TimeStart":"19:50:00","TimeEnd":"22:50:00","Venue":"someplace","Quota":"10","RegistrationShowID":"0","RegistrationSessionGroupID":"2","LinkedRegistrationShowID":"2","RRCount":"2"},{"ID":"16","ClassName":"RegistrationSession","LastEdited":"2017-04-21 23:19:41","Created":"2017-04-21 23:19:41","Date":"2017-04-28","TimeStart":"08:20:00","TimeEnd":"09:20:00","Venue":"somewhere","Quota":"19","RegistrationShowID":"5","RegistrationSessionGroupID":"0","LinkedRegistrationShowID":"5","RRCount":"0"}
        ],
        shows = [
                {"ID":"2","ClassName":"RegistrationShow","LastEdited":"2017-04-16 14:56:45","Created":"2017-04-12 16:34:26","DisplayTitle":"The Last Supper week 1 override","SortOrder":"3","RegistrationPageID":"354","LinkedShowPageID":"329","DisplayDate":"my own date","Published":"1","ShowDisplayDate":"11 - 13 Aug 2017","ShowDisplayVenue":"Victoria Theatre","Filename":"assets\/Previews\/show-12.jpg","ShowTitle":"The Last Supper super duper log long ognogngongongonlsldj ljldjfljsdlfj","SSCount":"7"},{"ID":"1","ClassName":"RegistrationShow","LastEdited":"2017-04-16 14:56:49","Created":"2017-04-12 16:31:34","DisplayTitle":null,"SortOrder":"4","RegistrationPageID":"354","LinkedShowPageID":"328","DisplayDate":null,"Published":"1","ShowDisplayDate":"12 - 14 Aug","ShowDisplayVenue":"Aliwal Arts Centre","Filename":"assets\/Previews\/show-14.jpg","ShowTitle":"Hamlet | Collage","SSCount":"3"},{"ID":"3","ClassName":"RegistrationShow","LastEdited":"2017-04-17 00:17:05","Created":"2017-04-17 00:17:05","DisplayTitle":null,"SortOrder":"2","RegistrationPageID":"355","LinkedShowPageID":"356","DisplayDate":null,"Published":"1","ShowDisplayDate":"12 & 13 Aug 2017","ShowDisplayVenue":"Drama Centre Theatre","Filename":"assets\/Previews\/show-20.jpg","ShowTitle":"Open Homes Art Studio Becoming Graphic The Making of Enchanting Moments Henrico's Farm (Ang Saka ni Henrico)","SSCount":"2"},{"ID":"4","ClassName":"RegistrationShow","LastEdited":"2017-04-17 00:18:14","Created":"2017-04-17 00:18:14","DisplayTitle":null,"SortOrder":"1","RegistrationPageID":"355","LinkedShowPageID":"357","DisplayDate":null,"Published":"1","ShowDisplayDate":"12 - 14 Aug 2017","ShowDisplayVenue":"Victoria Theatre","Filename":"assets\/Previews\/show-12.jpg","ShowTitle":"Show Name 2","SSCount":"3"},{"ID":"5","ClassName":"RegistrationShow","LastEdited":"2017-04-21 23:19:25","Created":"2017-04-21 23:19:25","DisplayTitle":"nothing here","SortOrder":"2","RegistrationPageID":"354","LinkedShowPageID":"332","DisplayDate":null,"Published":"1","ShowDisplayDate":"earlier date","ShowDisplayVenue":null,"Filename":"assets\/Previews\/show-13.jpg","ShowTitle":"Early New Show Page","SSCount":"1"},{"ID":"6","ClassName":"RegistrationShow","LastEdited":"2017-04-21 23:20:25","Created":"2017-04-21 23:20:14","DisplayTitle":"no session","SortOrder":"1","RegistrationPageID":"354","LinkedShowPageID":"367","DisplayDate":"whole year","Published":"1","ShowDisplayDate":"12 - 14 Aug","ShowDisplayVenue":"Aliwal Arts Centre","Filename":"assets\/Previews\/show-14.jpg","ShowTitle":"Hamlet 10","SSCount":"0"}
        ];

    var employees = [
            {"ID": 1, "firstName": "James", "lastName": "King", "managerId": 0, "managerName": "", "reports": 4, "title": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "james_king.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 2, "firstName": "Julie", "lastName": "Taylor", "managerId": 1, "managerName": "James King", "reports": 2, "title": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "julie_taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
            {"id": 3, "firstName": "Eugene", "lastName": "Lee", "managerId": 1, "managerName": "James King", "reports": 0, "title": "CFO", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "eugene_lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
            {"id": 4, "firstName": "John", "lastName": "Williams", "managerId": 1, "managerName": "James King", "reports": 3, "title": "VP of Engineering", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "john_williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
            {"id": 5, "firstName": "Ray", "lastName": "Moore", "managerId": 1, "managerName": "James King", "reports": 2, "title": "VP of Sales", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "ray_moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
            {"id": 6, "firstName": "Paul", "lastName": "Jones", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "paul_jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
            {"id": 7, "firstName": "Paula", "lastName": "Gates", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "paula_gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
            {"id": 8, "firstName": "Lisa", "lastName": "Wong", "managerId": 2, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "lisa_wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
            {"id": 9, "firstName": "Gary", "lastName": "Donovan", "managerId": 2, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "gary_donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
            {"id": 10, "firstName": "Kathleen", "lastName": "Byrne", "managerId": 5, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "kathleen_byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
            {"id": 11, "firstName": "Amy", "lastName": "Jones", "managerId": 5, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "amy_jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
            {"id": 12, "firstName": "Steven", "lastName": "Wells", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "steven_wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
        ],
        
        
        findById = function (id) {
            var registrant = null,
                l = registrants.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (parseInt(registrants[i].ID) === id) {
                    registrant = registrants[i];
                    break;
                }
            }
            return registrant;
        },

        findBySession = function (sessionId) {
            var results = registrants.filter(function (element) {
                return sessionId === parseInt(element.RegistrationSessionID);
            });
            return results;
        },
        
        findByShow = function (showId) {
            var results = sessions.filter(function (element) {
                return showId === parseInt(element.LinkedRegistrationShowID);
            });
            return results;
        };


    angular.module('myApp.memoryServices', [])
        .factory('Registrant', [
            function () {
                return {
                    query: function (session) {
                        return findBySession(parseInt(session.sessionId));
                    },
                    get: function (registrant) {
                        return findById(parseInt(registrant.registrantId)); // note this isnt really the full registrant object, just a temp object with 1 property (refer to controller.js)
                    }
                }

            }])
        .factory('Show', [
            function () {
                return {
                    query: function () {
                        return shows;
                    }
                }

            }])
        .factory('Session', [
            function () {
                return {
                    query: function (show) {
                        return findByShow(parseInt(show.showId));
                    }
                }

            }]);

}());