# cartera-de-clientes-3

# Bibliografía

Manejar formularios con react
https://www.agirl.codes/complete-guide-build-react-forms-with-usestate-hook

# Pasos para configurar el ambiente para correr el proyecto

git clone https://github.com/mcamachog1/cartera-de-clientes-3.git

# BACKEND
cd backend
virtualenv venv
# activate virtual env
source venv/bin/activate
# check python version
python --version
# install django
pip install django
# check django version
python -m django --version
# run in backend dir para crear el proyecto
django-admin startproject server
# navigate to server dir para levantar el servicio
cd server 
# run development server 
python manage.py runserver

# FRONTEND
cd ../../frontend
# borrar archivos y carpetas
  package-lock.json
  package.json
  public/
  src/
# ir al directorio raiz del proyecto
cd ..
npx create-react-app frontend
cd frontend
npm start

