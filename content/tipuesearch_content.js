var tipuesearch = {"pages": [{'title': 'about', 'text': '\n \n 倉儲: https://github.com/40823225/cd2021 \n \n \n \n \xa0 \n', 'tags': '', 'url': 'about.html'}, {'title': '2人分組作業', 'text': '2人小組名單:40823214 40823225 \n', 'tags': '', 'url': '2人分組作業.html'}, {'title': '設計理念', 'text': '\n', 'tags': '', 'url': '設計理念.html'}, {'title': '自動吹笛子機', 'text': '\n', 'tags': '', 'url': '自動吹笛子機.html'}, {'title': '程式模擬', 'text': 'Stage1-bg6自動吹笛子機remoteApi \n 控制： \n f，d，s，j，k，l分別控制六根不同的桿子往下 \n r，e，w，u，i，o控制六根桿子往上 \n 此為40823214製作 \n \n 下載 \n 吹笛子程式.rar \n 自動吹笛子remoteApi.ttt \n 參考影片 \n \n 程式參考 \n import sim as vrep\nimport math\nimport random\nimport time\nimport keyboard\nimport math\n#from winsound import Beep\n\n \nprint (\'Start\')\n \n\nvrep.simxFinish(-1)\n\nclientID = vrep.simxStart(\'127.0.0.1\', 19997, True, True, 5000, 5)\n \nif clientID != -1:\n    print (\'Connected to remote API server\')\n     \n    res = vrep.simxAddStatusbarMessage(\n        clientID, "test-25",\n        vrep.simx_opmode_oneshot)\n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\n \n    \n    opmode = vrep.simx_opmode_oneshot_wait\n    STREAMING = vrep.simx_opmode_streaming\n \n    \n    vrep.simxStartSimulation(clientID, opmode)\n    ret,joint1=vrep.simxGetObjectHandle(clientID,"Revolute3_1",opmode)\n    ret,joint2=vrep.simxGetObjectHandle(clientID,"Revolute3_2",opmode)\n    ret,joint3=vrep.simxGetObjectHandle(clientID,"Revolute3_3",opmode)\n    ret,joint4=vrep.simxGetObjectHandle(clientID,"Revolute3_4",opmode)\n    ret,joint5=vrep.simxGetObjectHandle(clientID,"Revolute3_5",opmode)\n    ret,joint6=vrep.simxGetObjectHandle(clientID,"Revolute3_6",opmode)\n\n    ret,joint01=vrep.simxGetObjectHandle(clientID,"joint0_1",opmode)\n    ret,joint02=vrep.simxGetObjectHandle(clientID,"joint0_2",opmode)\n    ret,joint03=vrep.simxGetObjectHandle(clientID,"joint0_3",opmode)\n    ret,joint04=vrep.simxGetObjectHandle(clientID,"joint0_4",opmode)\n    ret,joint05=vrep.simxGetObjectHandle(clientID,"joint0_5",opmode)\n    ret,joint06=vrep.simxGetObjectHandle(clientID,"joint0_6",opmode)\n\n    degr=-12*math.pi/180\n    py=0.05\n    set1=False\n    set2=False\n    set3=False\n    set4=False\n    set5=False\n    set6=False\n\n    vrep.simxSetJointTargetPosition(clientID,joint1,0,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint01,0,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint2,0,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint02,0,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint3,0,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint03,0,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint4,0,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint04,0,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint5,0,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint05,0,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint6,0,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint06,0,opmode)\n\n    while True:\n        \n        if keyboard.is_pressed("f"):\n            if set1==False:\n                vrep.simxSetJointTargetPosition(clientID,joint1,degr,opmode)\n                vrep.simxSetJointTargetPosition(clientID,joint01,py,opmode)\n                set1=True\n        if keyboard.is_pressed("d"):\n            if set2==False:\n                vrep.simxSetJointTargetPosition(clientID,joint2,degr,opmode)\n                vrep.simxSetJointTargetPosition(clientID,joint02,py,opmode)\n                set2=True\n        if keyboard.is_pressed("s"):\n            if set3==False:\n                vrep.simxSetJointTargetPosition(clientID,joint3,degr,opmode)\n                vrep.simxSetJointTargetPosition(clientID,joint03,py,opmode)\n                set3=True\n        if keyboard.is_pressed("j"):\n            if set4==False:\n                vrep.simxSetJointTargetPosition(clientID,joint4,degr,opmode)\n                vrep.simxSetJointTargetPosition(clientID,joint04,py,opmode)\n                set4=True\n        if keyboard.is_pressed("k"):\n            if set5==False:\n                vrep.simxSetJointTargetPosition(clientID,joint5,degr,opmode)\n                vrep.simxSetJointTargetPosition(clientID,joint05,py,opmode)\n                set5=True\n        if keyboard.is_pressed("l"):\n            if set6==False:\n                vrep.simxSetJointTargetPosition(clientID,joint6,degr,opmode)\n                vrep.simxSetJointTargetPosition(clientID,joint06,py,opmode)\n                set6=True\n\n        \n        if keyboard.is_pressed("r"):\n            if set1==True:\n                vrep.simxSetJointTargetPosition(clientID,joint1,0,opmode)\n                vrep.simxSetJointTargetPosition(clientID,joint01,0,opmode)\n                set1=False\n        if keyboard.is_pressed("e"):\n            if set2==True:\n                vrep.simxSetJointTargetPosition(clientID,joint2,0,opmode)\n                vrep.simxSetJointTargetPosition(clientID,joint02,0,opmode)\n                set2=False\n        if keyboard.is_pressed("w"):\n            if set3==True:\n                vrep.simxSetJointTargetPosition(clientID,joint3,0,opmode)\n                vrep.simxSetJointTargetPosition(clientID,joint03,0,opmode)\n                set3=False\n        if keyboard.is_pressed("u"):\n            if set4==True:\n                vrep.simxSetJointTargetPosition(clientID,joint4,0,opmode)\n                vrep.simxSetJointTargetPosition(clientID,joint04,0,opmode)\n                set4=False\n        if keyboard.is_pressed("i"):\n            if set5==True:\n                vrep.simxSetJointTargetPosition(clientID,joint5,0,opmode)\n                vrep.simxSetJointTargetPosition(clientID,joint05,0,opmode)\n                set5=False\n        if keyboard.is_pressed("o"):\n            if set6==True:\n                vrep.simxSetJointTargetPosition(clientID,joint6,0,opmode)\n                vrep.simxSetJointTargetPosition(clientID,joint06,0,opmode)\n                set6=False\n        \n        #if(set1==true ):\n            #Beep(422, 3000) \n        \n \n \nelse:\n    print (\'Failed connecting to remote API server\')\n    print (\'End\') \n \n \n', 'tags': '', 'url': '程式模擬.html'}, {'title': '4人分組作業', 'text': '4人分組名單: 40823214 40823225 40823247 40823248 \n', 'tags': '', 'url': '4人分組作業.html'}, {'title': '多功能腳踏車衝擊測試機', 'text': '', 'tags': '', 'url': '多功能腳踏車衝擊測試機.html'}, {'title': '1.腳踏車架衝擊測試', 'text': '參考規範 \n ISO 4210 \n 第六章 \n 4.1車架-衝擊測試(落槌衝擊) \n 4.1.2 測試方法 \n 4.1.2.1\xa0 \n 在測試治具上安裝重1公斤滾輪，如下圖，將重22.5公斤的落槌至於滾輪上，滾輪則位於前叉尾端，將落錘升起治距離"h"，釋放落錘使其錘職下落 \n \n \n', 'tags': '', 'url': '1.腳踏車架衝擊測試.html'}, {'title': '2.前叉衝擊測試', 'text': '參考規範 \n ISO 4210 \n 第六章 \n 5.4 前叉-後巷衝擊測試 \n 5.4.1.1\xa0 \n 在測試治具上安裝重1公斤滾輪，如下圖，將重22.5公斤的落槌至於滾輪上，將落錘升起治距離"h"，釋放落錘使其錘職下落 \n \n', 'tags': '', 'url': '2.前叉衝擊測試.html'}, {'title': '3.踏板衝擊測試', 'text': '參考規範 \n ISO 4210 \n 第八章 \n 4.2 踏板－衝擊測試 \n 將腳踏板穩固鎖緊於堅硬平面治具上，與軸心呈水平，如圖 3 所示，製作圖 2 示意的落錘，重 15 公斤，從高 400 mm 處以衝擊腳踏板中心。 備註見 TBIS 4210‐3:2016 附錄 B。 \n \n', 'tags': '', 'url': '3.踏板衝擊測試.html'}, {'title': '4.登山車輪組能量吸收測試', 'text': '參考規範 \n ISO 4210 \n 第七章 附錄C \n C1.1要求: \n 依照測試方法完成測試後，不得出現胎壓喪失或出現斷裂或目視可見之裂痕 \n C1.2 測試方法 \n 依輪軸之緊固裝置支撐倫組，兵將受衝擊處語氣嘴呈90度相對位置後，以40J進行衝擊，衝擊之錐鉆須為鐵機金屬，總質量為22.5KG，落下期間允許被引導，重吉時須達到自由落體95%含以上的落下速度 \n 錐鉆幾何規格如下，其長度需大於輪胎寬度 \n \n \n', 'tags': '', 'url': '4.登山車輪組能量吸收測試.html'}, {'title': '0319 繪圖', 'text': '車架落槌治具 \n \n 前叉落槌治具 \n \n', 'tags': '', 'url': '0319 繪圖.html'}, {'title': '成品', 'text': '車架衝擊 \n \n 前叉衝擊 \n \n', 'tags': '', 'url': '成品.html'}, {'title': '8人分組作業', 'text': '小組成員：40823211 40823214 40823216 40823218 40823225 40823238 40823247 40823248 \n', 'tags': '', 'url': '8人分組作業.html'}, {'title': '機械手臂', 'text': '原本我們的主題，是在我們原本在stage2-bg6所做的腳踏車衝擊測試機跟機械手臂在做選擇，但考慮到 腳踏車衝擊測試機的零件數過多及他所會遇到的力學相關的問題，所以我們最後討論出來的結果是，將主題訂為機械手臂。 \n', 'tags': '', 'url': '機械手臂.html'}, {'title': '繪圖成果', 'text': '此為不含夾爪有六軸的機械手臂 \n \n', 'tags': '', 'url': '繪圖成果.html'}, {'title': '影片', 'text': '', 'tags': '', 'url': '影片.html'}, {'title': '第一周', 'text': '\n https://youtu.be/D4YpHmFXFnw \n', 'tags': '', 'url': '第一周.html'}, {'title': '第二周', 'text': '第二周開始以小組為主做的影片 \n \n https://youtu.be/0-DTpQUy_DM \n', 'tags': '', 'url': '第二周.html'}, {'title': '第四周', 'text': '這是我們2人小組最後的報告影片 \n \n https://youtu.be/xn5OEX7mVqQ \n', 'tags': '', 'url': '第四周.html'}, {'title': '第五周', 'text': 'https://youtu.be/WXFsFCeMtKM \n', 'tags': '', 'url': '第五周.html'}, {'title': '第六周', 'text': 'https://youtu.be/Oc-Pmd3xb3Q \n', 'tags': '', 'url': '第六周.html'}, {'title': '第七周', 'text': 'https://youtu.be/ysv6bemaso4 \n', 'tags': '', 'url': '第七周.html'}, {'title': '第九周', 'text': '4人小組 \n \n', 'tags': '', 'url': '第九周.html'}, {'title': '第九周2', 'text': '8人分組 \n \n', 'tags': '', 'url': '第九周2.html'}, {'title': '小組直播影片', 'text': '', 'tags': '', 'url': '小組直播影片.html'}, {'title': '第11週', 'text': '14號及18號拍攝 \n \n 16號拍攝 \n \n 25號拍攝 \n \n', 'tags': '', 'url': '第11週.html'}, {'title': '第13週', 'text': '第一次 \n \n 第二次 \n \n \n', 'tags': '', 'url': '第13週.html'}, {'title': '第15週', 'text': '\n', 'tags': '', 'url': '第15週.html'}, {'title': '討論', 'text': '', 'tags': '', 'url': '討論.html'}, {'title': '2人分組討論', 'text': '\n', 'tags': '', 'url': '2人分組討論.html'}, {'title': '4人分組討論', 'text': '', 'tags': '', 'url': '4人分組討論.html'}, {'title': '第一次', 'text': '3/25 \n \n', 'tags': '', 'url': '第一次.html'}, {'title': '第二次', 'text': '4/6 \n \n \n', 'tags': '', 'url': '第二次.html'}, {'title': '8人分組討論', 'text': '', 'tags': '', 'url': '8人分組討論.html'}, {'title': '8人討論第一次', 'text': '\n', 'tags': '', 'url': '8人討論第一次.html'}, {'title': '8人討論第二次', 'text': '\n', 'tags': '', 'url': '8人討論第二次.html'}, {'title': '8人討論第三次', 'text': '\n', 'tags': '', 'url': '8人討論第三次.html'}, {'title': '8人討論第四次', 'text': '\n', 'tags': '', 'url': '8人討論第四次.html'}, {'title': '8人討論第五次', 'text': '\n', 'tags': '', 'url': '8人討論第五次.html'}, {'title': '8人討論第六次', 'text': '\n', 'tags': '', 'url': '8人討論第六次.html'}, {'title': '遇到的問題', 'text': '', 'tags': '', 'url': '遇到的問題.html'}, {'title': 'blog', 'text': 'blog的版本不同導致無法開啟→解決方法找到一位可以正常開啟leo的同學 → 然後先將自己的python39刪除 → 後將對方的python39複製進自己檔案的相同位置→然後先確定自己是使用ipv4或ipv6→再到home_ipv4或 home_ipv6裡建立1個.leo的文字檔後就可以成功開啟 \n \n \n', 'tags': '', 'url': 'blog.html'}, {'title': 'reveal', 'text': '這次在做4人分組的reveal的時候遇到少了檔案導致 reveal的排版出現問題 \n \n \n 解決方法:將自己倉儲或第一次分組時裡面reveal裡的dist檔按照以下步驟放入4人分組的reveal內後git pull \n \n', 'tags': '', 'url': 'reveal.html'}, {'title': 'W5', 'text': '我負責的是乙班的 \n \n \n \n 組別 \n 影片長度 \n 影片時間 \n \n \n cd2021_2b_stage1_g1.mp4 \n 00:07:14 \n 3/19 13:53 \n \n \n \n \n \n \n cd2021_2b_stage1_g2.mp4 \n \n \n \n \n 00:01:55 \n 3/19 13:57 \n \n \n \n \n \n \n cd2021_2b_stage1_g3.mp4 \n \n \n \n \n 00:01:59 \n 3/19 14:00 \n \n \n \n \n \n \n cd2021_2b_stage1_g4.mp4 \n \n \n \n \n 00:02:51 \n 3/19 14:03 \n \n \n \n \n \n \n cd2021_2b_stage1_g5.mp4 \n \n \n \n \n 00:03:00 \n 3/19 14:07 \n \n \n \n \n \n \n cd2021_2b_stage1_g6.mp4 \n \n \n \n \n 00:03:07 \n 3/19 14:14 \n \n \n \n \n \n \n cd2021_2b_stage1_g7.mp4 \n \n \n \n \n 00:02:47 \n 3/19 14:19 \n \n \n \n \n \n \n cd2021_2b_stage1_g8.mp4 \n \n \n \n \n 00:03:25 \n 3/19 14:24 \n \n \n \n \n \n \n cd2021_2b_stage1_g9.mp4 \n \n \n \n \n 00:02:43 \n 3/19 14:27 \n \n \n \n \n \n \n cd2021_2b_stage1_g10.mp4 \n \n \n \n \n 00:02:20 \n 3/19 14:32 \n \n \n \n \n \n \n cd2021_2b_stage1_g11.mp4 \n \n \n \n \n 00:01:38 \n 3/19 14:35 \n \n \n \n \n \n \n cd2021_2b_stage1_g12.mp4 \n \n \n \n \n 00:01:47 \n 3/19 14:38 \n \n \n \n \n \n \n cd2021_2b_stage1_g13.mp4 \n \n \n \n \n 00:02:09 \n 3/19 14:41 \n \n \n \n \n \n \n cd2021_2b_stage1_g14.mp4 \n \n \n \n \n 00:05:58 \n 3/19 14:48 \n \n \n cd2021_2b_stage1_g15.mp4 \n 00:03:24 \n 3/19 14:52 \n \n \n \n \n \n \n cd2021_2b_stage1_g16.mp4 \n \n \n \n \n 00:03:34 \n 3/19 14:56 \n \n \n \n \n \n \n cd2021_2b_stage1_g17.mp4 \n \n \n \n \n 00:04:33 \n 3/19 15:01 \n \n \n \n \n \n \n cd2021_2b_stage1_g18.mp4 \n \n \n \n \n 00:05:03 \n 3/19 15:08 \n \n \n \n \n \n \n cd2021_2b_stage1_g19.mp4 \n \n \n \n \n 00:03:12 \n 3/19 15:12 \n \n \n \n \n \n \n cd2021_2b_stage1_g20.mp4 \n \n \n \n \n 00:03:32 \n 3/19 15:16 \n \n \n \n \n \n \n cd2021_2b_stage1_g21.mp4 \n \n \n \n \n 00:05:02 \n 3/19 15:24 \n \n \n \n \n \n \n cd2021_2b_stage1_g22.mp4 \n \n \n \n \n 00:04:47 \n 3/19 15:31 \n \n \n \n \n \n \n cd2021_2b_stage1_g23.mp4 \n \n \n \n \n 00:02:56 \n 3/19 15:39 \n \n \n \n \n \n \n cd2021_2b_stage1_g24.mp4 \n \n \n \n \n 00:05:00 \n 3/19 15:45 \n \n \n \n \n \n \n cd2021_2b_stage1_g25.mp4 \n \n \n \n \n 00:04:54 \n 3/19 15:51 \n \n \n \n \n \n \n cd2021_2b_stage1_g26.mp4 \n \n \n \n \n 00:03:44 \n 3/19 16:00 \n \n \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'w16', 'text': '根據\xa0  http://mde.tw/cd2021/content/W16.html \xa0進行老師所出的作業 \n 影片: \n \n 雲端連結: \n https://drive.google.com/file/d/1q-0uNeSe3-Nm8e69F7O41BYaeBcPyxdu/view?usp=sharing', 'tags': '', 'url': 'w16.html'}]};