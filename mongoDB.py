import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["construction_site"]
equipment_collection = db["equipment"]
