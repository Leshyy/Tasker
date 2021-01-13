// Guidelines
// *. Save the entire board, dont handle mini-updates
// *. No need for saving an activities array per task, those activities are easily filtered from the board activities


var dbJSON = {
    "boards": [
        {
            "_id": "",
            "name": "",
            "creator": {
                "_id": "",
                "fullname": "",
                "imgUrl": ""
            },
            "createdAt": 124254735,
            "desc": "",
            "members": [
                {
                    "_id": "",
                    "fullname": "",
                    "imgUrl": ""
                }
            ],
            "groups": [
                {
                    "id": "",
                    "name": "",
                    "createdAt": 23757231,
                    "updatedAt": 234623543,
                    "color": "",
                    "tasks": [
                        {
                            "id": "",
                            "name": "",
                            "tags": [],
                            "createdAt": 1606733763732,
                            "updatedAt": 1606733763732,
                            "members": [
                                {
                                    "_id": "",
                                    "fullname": "",
                                    "imgUrl": ""
                                }
                            ],
                            "status": "",
                            "priority": "",
                            "note": "",
                            "dueDate": 1606820163000,
                            "comments": [
                                {
                                    "by": {
                                        "_id": "",
                                        "fullname": "",
                                        "imgUrl": ""
                                    },
                                    "text": ""
                                }
                            ],
                        }
                    ]
                }
            ],
            "activities": [
                {
                    "id": "",
                    "createdAt": 12243243,
                    "txt": "",
                    "byUser": {
                        "_id": "",
                        "fullname": "",
                        "imgUrl": ""
                    },
                    "task": {
                        "id": "c101",
                        "title": "Replace Logo"
                    }
                }
            ]
        }
    ],
    "user": {
        "_id": "",
        "isAdmin": true,
        "notifications": [
            {
                "byUser": {
                    "_id": "",
                    "fullname": "",
                    "imgUrl": ""
                },
                "content": "",
                "createdAt": 1606733792261
            }
        ],
        "fullname": "",
        "username": "",
        "email": "",
        "password": "",
        "phoneNumber": "",
        "birthday": "",
        "company": "",
        "score": "", //when user completes a task
        "createdAt": 1601297334426
    }
}