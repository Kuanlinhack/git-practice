# lambda_function.py
import json
import requests

def lambda_handler(event, context):
    print("Start Loading function")
    # Discord Webhook URL
    webhook_url = "https://discord.com/api/webhooks/1326035031570780182/vgWAmXKGjDJJIo_iyJwkwfHOJFaiXy6ykgcqPmgu_484D6xfTE1a7kaPblUEPt5XpH8V"

    # 設定訊息內容 
    message = {
        "content": "您好，這是 AWS Lambda 發送的通知！"
    }
    
    # 發送訊息到 Discord
    print("Start sending message")
    try:
        response = requests.post(webhook_url, json=message)
        response.raise_for_status()
        return {
            'statusCode': 200,
            'body': json.dumps('通知已成功發送！')
        }
    except requests.exceptions.RequestException as e:
        return {
            'statusCode': 500,
            'body': json.dumps(f"發送通知失敗：{str(e)}")
        }
