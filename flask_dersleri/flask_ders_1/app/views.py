from flask import Flask

app = Flask(__name__) #flaskın çalıştırıldığı yer burası ve biz app isimli bir değişkene atadık.


@app.route("/") #tırnak içine yazılan şey hangi sayfaya yönlendirileceği belirler / var ise main sayfadır.
def home():
    return "Flask denemesi"
if __name__ == "__main__": #kodun çalıştırıldığı kısım
    app.run(debug=True) #kod çalıştıldığında sunucuyu otomatik olarak reload eder.