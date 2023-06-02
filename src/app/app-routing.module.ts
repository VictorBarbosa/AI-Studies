import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export  const AppPagesPaths = [
  { title: 'Car Position', url: 'app-car-position', icon: 'mail' },
  { title: 'Car Brand Detected', url: 'app-car-brand-detected', icon: 'mail' },
  { title: 'Style Transfer', url: 'app-style-transfer', icon: 'mail' },
  { title: 'Object detected', url: 'app-object-detected', icon: 'mail' },
  { title: 'Image Reconstructor', url: 'app-image-reconstructor', icon: 'mail' },
  { title: 'Custom Image Classification', url: 'app-custom-image-classification', icon: 'mail' },
  { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
  { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
  { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
  { title: 'Archived', url: '/folder/archived', icon: 'archive' },
  { title: 'Trash', url: '/folder/trash', icon: 'trash' },
  { title: 'Spam', url: '/folder/spam', icon: 'warning' },
];


const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main/main.component').then((m) => m.MainComponent),
    children: [

      {
        path: 'app-car-position',
        loadComponent: () =>
          import('./main/car-position/car-position.component').then((m) => m.CarPositionComponent),
      },
      {
        path: 'app-custom-image-classification',
        loadComponent: () =>
          import('./main/custom-classification-model/custom-classification-model.component').then((m) => m.CustomClassificationModelComponent),
      },
      // {
      //   path: 'app-car-brand-detected',
      //   loadComponent: () =>
      //     import('./car-brand-detected/car-brand-detected.component').then((m) => m.CarBrandDetectedComponent),
      // },
      {
        path: 'app-style-transfer',
        loadComponent: () =>
          import('./main/style-transfer/style-transfer.component').then((m) => m.StyleTransferComponent),
      },
      {
        path: 'app-object-detected',
        loadComponent: () =>
          import('./main/object-detected/object-detected.component').then((m) => m.ObjectDetectedComponent),
      },
      {
        path: 'app-image-reconstructor',
        loadComponent: () =>
          import('./main/image-reconstructor/image-reconstructor.component').then((m) => m.ImageReconstructorComponent),
      },

    ]

  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
