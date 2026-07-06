import json

sampleJson = """{
   "company":{
      "employee":{
         "name":"emma",
         "payable":{
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]
print(salary)
# 7000

data["company"]["employee"]["birth_date"] = "1998-05-14"

with open("modified_data.json", "w") as f:
    json.dump(data, f, indent=4)
