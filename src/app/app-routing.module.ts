import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'ver',
    loadChildren: () => import('./pages/ver/ver.module').then( m => m.VerPageModule)
  },
  {
    path: 'pescao',
    loadChildren: () => import('./pages/pescao/pescao.module').then( m => m.PescaoPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  {
    path: 'home-alum',
    loadChildren: () => import('./pages/home-alum/home-alum.module').then( m => m.HomeAlumPageModule)
  },
  {
    path: 'list-cur-alumn',
    loadChildren: () => import('./pages/list-cur-alumn/list-cur-alumn.module').then( m => m.ListCurAlumnPageModule)
  },
  {
    path: 'list-cur-docen',
    loadChildren: () => import('./pages/list-cur-docen/list-cur-docen.module').then( m => m.ListCurDocenPageModule)
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule)
  },
  {
    path: 'escanear-qr',
    loadChildren: () => import('./pages/escanear-qr/escanear-qr.module').then( m => m.EscanearQrPageModule)
  },
  {
    path: 'lis-alum',
    loadChildren: () => import('./pages/lis-alum/lis-alum.module').then( m => m.LisAlumPageModule)
  },  {
    path: 'secc',
    loadChildren: () => import('./pages/secc/secc.module').then( m => m.SeccPageModule)
  },
  {
    path: 'gen-qrcls',
    loadChildren: () => import('./pages/gen-qrcls/gen-qrcls.module').then( m => m.GenQRClsPageModule)
  },
  {
    path: 'infrs',
    loadChildren: () => import('./pages/infrs/infrs.module').then( m => m.InfrsPageModule)
  },
  {
    path: 'espera',
    loadChildren: () => import('./pages/espera/espera.module').then( m => m.EsperaPageModule)
  },
  {
    path: 'presidente',
    loadChildren: () => import('./pages/presidente/presidente.module').then( m => m.PresidentePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
